LootJS.lootTables(event => {
    event
        .getLootTable('minecraft:chests/simple_dungeon')
        .firstPool()
        .addEntry(LootEntry.of("kubejs:music_disc_anhedonia").withWeight(1))
        .addEntry(LootEntry.of("kubejs:music_disc_lost_souls").withWeight(1))
        .addEntry(LootEntry.of("kubejs:music_disc_pain").withWeight(1))
})

LootJS.lootTables(event => {
    event
        .getLootTable('minecraft:chests/ancient_city')
        .firstPool()
        .addEntry(LootEntry.of("kubejs:music_disc_anhedonia").withWeight(1))
        .addEntry(LootEntry.of("kubejs:music_disc_lost_souls").withWeight(1))
        .addEntry(LootEntry.of("kubejs:music_disc_pain").withWeight(1))
})

LootJS.lootTables(event => {
    event
        .getLootTable('minecraft:chests/stronghold_corridor')
        .firstPool()
        .addEntry(LootEntry.of("kubejs:music_disc_anhedonia").withWeight(1))
        .addEntry(LootEntry.of("kubejs:music_disc_lost_souls").withWeight(1))
        .addEntry(LootEntry.of("kubejs:music_disc_pain").withWeight(1))
})

LootJS.lootTables(event => {
    event
        .getLootTable('spore:chests/equipment_chest')
        .firstPool()
        .addEntry(LootEntry.of("kubejs:music_disc_anhedonia").withWeight(1))
        .addEntry(LootEntry.of("kubejs:music_disc_lost_souls").withWeight(1))
        .addEntry(LootEntry.of("kubejs:music_disc_pain").withWeight(1))
})