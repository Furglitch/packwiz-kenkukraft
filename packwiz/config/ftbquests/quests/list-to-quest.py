#!/usr/bin/env python3
import argparse
import re
import math
from pathlib import Path


# X range
X_MIN = -10.0
X_MAX = 4.0
X_STEP = 1.0

# Y range
Y_MIN = 0.0
Y_MAX = 30.0
Y_STEP = 1.0

def _make_cycle(minv: float, maxv: float, step: float):
    vals = []
    if step == 0:
        raise ValueError('step must be non-zero')
    v = float(minv)
    if step > 0:
        while v <= maxv + 1e-9:
            vals.append(round(v, 10))
            v += step
    else:
        while v >= maxv - 1e-9:
            vals.append(round(v, 10))
            v += step
    return vals

# generated cycles
X_CYCLE = _make_cycle(X_MIN, X_MAX, X_STEP)
Y_CYCLE = _make_cycle(Y_MIN, Y_MAX, Y_STEP)

ID_RE = re.compile(r'"([a-z0-9_\-]+:[a-z0-9_\-]+)"')
ID_RE_SIMPLE = re.compile(r'[a-z0-9_\-]+:[a-z0-9_\-]+')

def load_list(path: Path):
    lines = path.read_text().splitlines()
    out = []
    seen = set()
    for line in lines:
        # split out inline comments; treat presence of '//' as a row separator marker
        if '//' in line:
            code, _comment = line.split('//', 1)
            code = code.strip()
            has_comment = True
        else:
            code = line.strip()
            has_comment = False

        if not code:
            if has_comment:
                out.append(None)
            continue

        ids = ID_RE.findall(code)
        if not ids:
            ids = ID_RE_SIMPLE.findall(code)

        for i in ids:
            if i not in seen:
                seen.add(i)
                out.append(i)

        if has_comment:
            out.append(None)

    return out


def find_present_ids(chapter_text: str):
    return set(ID_RE_SIMPLE.findall(chapter_text))


def make_snippet(missing_ids):
    """Generate snippet from a list that may include None row-separators.

    None means: advance to next row and reset column to lowest X.
    Rows are centered horizontally within the configured number of columns
    (len(X_CYCLE)). If a row has fewer items than columns, it will be
    offset so items are centered.
    """
    lines = []
    ncols = len(X_CYCLE) if len(X_CYCLE) > 0 else 1

    # Build explicit rows: split on None and also break rows when reaching ncols
    rows = []
    cur = []
    for token in missing_ids:
        if token is None:
            rows.append(cur)
            cur = []
            continue
        cur.append(token)
        if len(cur) >= ncols:
            rows.append(cur)
            cur = []
    if cur:
        rows.append(cur)

    seq = 0
    for r_idx, row_items in enumerate(rows):
        used = len(row_items)
        if used == 0:
            # nothing in this row; skip but still advance Y index
            continue

        # center by calculating fractional offset (can be half-step)
        if used < ncols:
            offset_cols = (ncols - used) / 2.0
            left_cols = int(math.floor(offset_cols))
            frac = offset_cols - left_cols
            extra_x = frac * X_STEP
        else:
            left_cols = 0
            extra_x = 0.0

        y = Y_CYCLE[r_idx % len(Y_CYCLE)]
        for i, idval in enumerate(row_items):
            col = left_cols + i
            base_x = X_CYCLE[col % len(X_CYCLE)]
            x = base_x + extra_x
            seq += 1
            qid = f'MISSQ{seq:06d}'
            tid = f'MISST{seq:06d}'
            lines.append('\t\t{')
            lines.append(f'\t\t\tid: "{qid}"')
            lines.append('\t\t\ttasks: [{')
            lines.append(f'\t\t\t\tid: "{tid}"')
            lines.append(f'\t\t\t\titem: {{ count: 1, id: "{idval}" }}')
            lines.append('\t\t\t\ttype: "item"')
            lines.append('\t\t\t}]')
            lines.append(f'\t\t\tx: {float(x):.1f}d')
            lines.append(f'\t\t\ty: {float(y):.1f}d')
            lines.append('\t\t}')

    return '\n'.join(lines)


def insert_snippet_into_chapter(chapter_text: str, snippet: str):
    marker = '\n\t]\n}'
    idx = chapter_text.rfind(marker)
    if idx != -1:
        before = chapter_text[:idx]
        after = chapter_text[idx:]
        new_text = before + '\n' + snippet + '\n' + after
        return new_text
    # fallback: append at end
    return chapter_text + '\n// Appended missing quests\n' + snippet + '\n'


def main():
    p = argparse.ArgumentParser()
    p.add_argument('--items', required=True, help='Path to items list file')
    p.add_argument('--chapter', required=False, help='Path to chapter SNBT to read (optional). If omitted, the script will generate quests for the full list and write them to output.snbt')
    args = p.parse_args()

    items_path = Path(args.items)
    chapter_arg = args.chapter

    if not items_path.exists():
        print('Items path does not exist. Aborting.')
        raise SystemExit(2)

    items = load_list(items_path)

    # count only real item ids (ignore None separators)
    item_count = sum(1 for i in items if i)

    if not chapter_arg:
        print(f'No chapter provided; generating {item_count} quest objects and writing to output.snbt')
        snippet = make_snippet(items)
        Path('output.snbt').write_text(snippet)
        print('Wrote output.snbt')
        return

    chapter_path = Path(chapter_arg)
    if not chapter_path.exists():
        print('Provided chapter path does not exist. Aborting.')
        raise SystemExit(2)

    chapter_text = chapter_path.read_text()
    present = find_present_ids(chapter_text)

    # preserve row separators (None) while removing ids already present in chapter
    missing = []
    present_count = 0
    for t in items:
        if t is None:
            missing.append(None)
        else:
            if t in present:
                present_count += 1
            else:
                missing.append(t)

    print(f'Found {item_count} ids in list; {present_count} present in chapter; {sum(1 for i in missing if i)} missing')
    if not missing:
        print('Nothing missing. Writing original chapter to output.snbt')
        Path('output.snbt').write_text(chapter_text)
        return

    print('Missing IDs:')
    for m in missing:
        print(' -', m)
    snippet = make_snippet(missing)
    out = Path('output.snbt')
    out.write_text(snippet)
    print(f'Wrote output.snbt with {len(missing)} new quest objects (snippet-only)')


if __name__ == '__main__':
    main()
