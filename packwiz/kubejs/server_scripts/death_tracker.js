ServerEvents.loaded(event => {
    event.server.runCommandSilent('scoreboard objectives add deaths deathCount')
})

function getDeathCount(server, player) {
    let scoreboard = server.scoreboard
    let objective = scoreboard.getObjective('deaths')
    if (!objective) return 0
    let scoreAccess = scoreboard.getOrCreatePlayerScore(player, objective)
    return scoreAccess.get()
}

EntityEvents.death('player', event => {
    let player = event.entity
    
    event.server.scheduleInTicks(5, () => {
        let deaths = getDeathCount(event.server, player)
        player.sendData('death_update', { count: deaths })
    })
})

PlayerEvents.loggedIn(event => {
    let player = event.player
    
    event.server.scheduleInTicks(20, () => {
        let deaths = getDeathCount(event.server, player)
        player.sendData('death_update', { count: deaths })
    })
})
