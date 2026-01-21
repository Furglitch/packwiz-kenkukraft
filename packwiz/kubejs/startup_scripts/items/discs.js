StartupEvents.registry('sound_event', e => {
    e.create(`record.anhedonia`)
    e.create(`record.lost_souls`)
    e.create(`record.pain`)
})


// Anhedonia
StartupEvents.registry('item', e => {
    e.create(`music_disc_anhedonia`)
     .jukeboxPlayable(`kubejs:anhedonia`)
     .texture(`kubejs:item/disc_mycelium`)
     .tag("minecraft:music_discs")
     .tag("kenkukraft:music_discs")
     .unstackable()
})

// Lost Souls
StartupEvents.registry('item', e => {
    e.create(`music_disc_lost_souls`)
     .jukeboxPlayable(`kubejs:lost_souls`)
     .texture(`kubejs:item/disc_blood`)
     .tag("minecraft:music_discs")
     .tag("kenkukraft:music_discs")
     .unstackable()
})

// The Pain That Never Left
StartupEvents.registry('item', e => {
    e.create(`music_disc_pain`)
     .jukeboxPlayable(`kubejs:pain`)
     .texture(`kubejs:item/disc_flesh`)
     .tag("minecraft:music_discs")
     .tag("kenkukraft:music_discs")
     .unstackable()
})