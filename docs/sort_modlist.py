#!/usr/bin/env python3
"""Sort mod entries in a MODLIST.md-style file.
Rules:
- Keep subsection headings order (###...) unchanged.
- Sort top-level list entries under each (sub)section.
- For a parent list entry with nested addon bullets, sort the nested bullets separately.
- Do not modify the entire Resource Packs section (skip it).
"""
import sys
import re


def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read().splitlines()


def write_file(path, lines):
    with open(path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines) + ('\n' if lines and not lines[-1].endswith('\n') else ''))


def indent_level(line):
    m = re.match(r'^(\s*)', line)
    return len(m.group(1)) if m else 0


def is_bullet(line):
    return re.match(r'^\s*-\s+', line) is not None


def sort_list_area(lines):
    bullet_inds = [i for i,l in enumerate(lines) if is_bullet(l)]
    if not bullet_inds:
        return lines
    min_indent = min(indent_level(lines[i]) for i in bullet_inds)

    parent_idx = [i for i in bullet_inds if indent_level(lines[i]) == min_indent]
    parent_idx.sort()

    parent_blocks = []
    for pi, start in enumerate(parent_idx):
        end = parent_idx[pi+1] if pi+1 < len(parent_idx) else len(lines)
        block = lines[start:end]

        parent_line = block[0]
        child_lines = []
        other_lines = []
        for l in block[1:]:
            if is_bullet(l) and indent_level(l) > min_indent:
                child_lines.append(l)
            else:
                other_lines.append(l)

        if child_lines:
            child_lines_sorted = sorted(child_lines, key=lambda s: s.strip().lower())
        else:
            child_lines_sorted = []

        new_block = [parent_line]
        new_block.extend(child_lines_sorted)
        new_block.extend(other_lines)
        parent_blocks.append((parent_line, new_block))
    parent_blocks_sorted = sorted(parent_blocks, key=lambda t: re.sub(r'^\s*-\s+', '', t[0]).strip().lower())

    out = []
    for _, blk in parent_blocks_sorted:
        out.extend(blk)
    return out


def process_section_block(lines):
    i = 0
    out = []
    n = len(lines)
    while i < n:
        if is_bullet(lines[i]):
            j = i
            while j < n and (is_bullet(lines[j]) or (lines[j].strip() == '' or lines[j].startswith('\t') or lines[j].startswith('    '))):
                j += 1
            area = lines[i:j]
            sorted_area = sort_list_area(area)
            out.extend(sorted_area)
            i = j
        else:
            out.append(lines[i])
            i += 1
    return out


def main(path):
    lines = read_file(path)

    out_lines = []
    i = 0
    n = len(lines)

    section_indices = []
    for idx, line in enumerate(lines):
        if line.startswith('## '):
            section_indices.append(idx)
    section_indices.append(n)

    first_sec = section_indices[0] if section_indices else n
    out_lines.extend(lines[:first_sec])

    for si in range(len(section_indices)-1):
        start = section_indices[si]
        end = section_indices[si+1]
        sec_block = lines[start:end]
        sec_title = sec_block[0][3:].strip() if sec_block else ''
        out_lines.append(sec_block[0])

        if sec_title == 'Resource Packs':
            out_lines.extend(sec_block[1:])
            continue

        sub_idxs = [idx for idx in range(start+1, end) if lines[idx].startswith('### ')]
        if not sub_idxs:
            content = sec_block[1:]
            processed = process_section_block(content)
            out_lines.extend(processed)
        else:
            split_points = [start+1] + sub_idxs + [end]
            for k in range(len(split_points)-1):
                s = split_points[k]
                e = split_points[k+1]
                if k == 0:
                    content = lines[s:e]
                    processed = process_section_block(content)
                    out_lines.extend(processed)
                else:
                    out_lines.append(lines[s])
                    content = lines[s+1:e]
                    processed = process_section_block(content)
                    out_lines.extend(processed)

    write_file(path, out_lines)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: sort_modlist.py path/to/MODLIST.md')
        sys.exit(2)
    main(sys.argv[1])
