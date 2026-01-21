StartupEvents.registry('sound_event', e => {
    e.create(`record.anhedonia`)
    e.create(`record.lost_souls`)
    e.create(`record.pain`)
})


// Anhedonia
StartupEvents.registry('item', e => { e
    .create(`music_disc_anhedonia`)
    .jukeboxPlayable(`kubejs:anhedonia`)
    .texture(`kubejs:item/disc_mycelium`)
    .tag("c:music_discs")
    .tag("kenkukraft:music_discs")
    .rarity('rare')
    .unstackable()
    .food(food => food
        .saturation(0.1)
        .alwaysEdible()
        .fastToEat()
        .effect('minecraft:nausea', 200, 1, 1.0) // Nausea 2 for 10 seconds (always)
        .effect('spore:mycelium_ef', 600, 0, 1.0) // Mycelium Infection 1 for 30 seconds (always)
    )
})

// Lost Souls
StartupEvents.registry('item', e => { e
    .create(`music_disc_lost_souls`)
    .jukeboxPlayable(`kubejs:lost_souls`)
    .texture(`kubejs:item/disc_blood`)
    .tag("c:music_discs")
    .tag("kenkukraft:music_discs")
    .rarity('rare')
    .unstackable()
    .food(food => food
        .saturation(0.1)
        .alwaysEdible()
        .fastToEat()
        .effect('minecraft:nausea', 200, 1, 1.0) // Nausea 2 for 10 seconds (always)
        .effect('minecraft:poison', 600, 0, 0.5) // Poison 1 for 30 seconds (50% chance)
        .effect('minecraft:weakness', 600, 0, 0.5) // Weakness 1 for 30 seconds (50% chance)
    )
})

// The Pain That Never Left
StartupEvents.registry('item', e => { e
    .create(`music_disc_pain`)
    .jukeboxPlayable(`kubejs:pain`)
    .texture(`kubejs:item/disc_flesh`)
    .tag("c:music_discs")
    .tag("kenkukraft:music_discs")
    .rarity('rare')
    .unstackable()
    .food(food => food
        .saturation(0.1)
        .alwaysEdible()
        .fastToEat()
        .effect('minecraft:nausea', 200, 1, 1.0) // Nausea 2 for 10 seconds (always)
        .effect('minecraft:hunger', 600, 0, 1.0) // Hunger 1 for 30 seconds (always)
    )
})