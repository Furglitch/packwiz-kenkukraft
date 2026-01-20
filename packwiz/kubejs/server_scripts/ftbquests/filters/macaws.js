// Stairs
ServerEvents.tags('item', event => {
    event.add('kenkukraft:filters_macaw_stairs', /^mcwstairs:.*/)
    event.remove('kenkukraft:filters_macaw_stairs', /^mcwstairs:.*_railing$/)
    event.remove('kenkukraft:filters_macaw_stairs', /^mcwstairs:.*_balcony$/)
    event.add('kenkukraft:filters_macaw_stairs', /^mcwbridges:.*_stairs$/)
})

// Bridges
ServerEvents.tags('item', event => {
    event.add('kenkukraft:filters_macaw_bridges', /^mcwbridges:.*/)
    event.remove('kenkukraft:filters_macaw_bridges', /^mcwbridges:.*_stair$/)
    event.remove('kenkukraft:filters_macaw_bridges', 'mcwbridges:bridge_lantern')
    event.remove('kenkukraft:filters_macaw_bridges', 'mcwbridges:bridge_torch')
    event.remove('kenkukraft:filters_macaw_bridges', 'mcwbridges:pliers')
})

// Fences
ServerEvents.tags('item', event => {
    event.add('kenkukraft:filters_macaw_fences', /^mcwfences:.*/)
    event.add('kenkukraft:filters_macaw_fences', /^mcwstairs:.*_railing$/)
    event.add('kenkukraft:filters_macaw_fences', /^mcwstairs:.*_balcony$/)
})

// Lights
ServerEvents.tags('item', event => {
    event.add('kenkukraft:filters_macaw_lights', /^mcwlights:.*/)
    event.remove('kenkukraft:filters_macaw_lights', /^mcwlights:.*_slab$/)
    event.remove('kenkukraft:filters_macaw_lights', /^mcwlights:.*_chain$/)
})