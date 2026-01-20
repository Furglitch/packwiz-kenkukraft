// Pretty Pipes - Upgrades
ServerEvents.tags('item', event => {
    event.add('kenkukraft:filters_prettypipes_upgrades', /^prettypipes:.*_module$/)
    event.add('kenkukraft:filters_prettypipes_upgrades', /^prettypipes:.*_modifier$/)
})

// Pretty Pipes: Fluids - Upgrades
ServerEvents.tags('item', event => {
    event.add('kenkukraft:filters_prettypipes_upgrades_fluid', /^ppfluids:.*_module$/)
    event.add('kenkukraft:filters_prettypipes_upgrades_fluid', /^ppfluids:.*_modifier$/)
})

// Mekanism - Pipes

   // Universal Cable
    ServerEvents.tags('item', event => {
        event.add('kenkukraft:filters_mekanism_pipes_universal', [
            /^mekanism:.*_universal_cable$/
        ])
    })

    // Mechanical Pipe
    ServerEvents.tags('item', event => {
        event.add('kenkukraft:filters_mekanism_pipes_mechanical', [
            /^mekanism:.*_mechanical_pipe$/
        ])
    })

    // Pressurized Tube
    ServerEvents.tags('item', event => {
        event.add('kenkukraft:filters_mekanism_pipes_pressurized', [
            /^mekanism:.*_pressurized_tube$/
        ])
    })

    // Logistical Transporter
    ServerEvents.tags('item', event => {
        event.add('kenkukraft:filters_mekanism_pipes_logistical', [
            /^mekanism:.*_logistical_transporter$/
        ])
    })

    // Thermodynamic Conductor
    ServerEvents.tags('item', event => {
        event.add('kenkukraft:filters_mekanism_pipes_thermodynamic', [
            /^mekanism:.*_thermodynamic_conductor$/
        ])
    })


// Create - Pipes & Belts

    // Belts
    ServerEvents.tags('item', event => {
        event.add('kenkukraft:filters_create_belts', /^.*belt_connector.*$/)
    })

    // Pipes
    ServerEvents.tags('item', event => {
        event.add('kenkukraft:filters_create_pipes', [
            /^create:.*fluid_pipe$/
        ])
        event.add('kenkukraft:filters_create_pipes', 'copycats:copycat_fluid_pipe')
    })