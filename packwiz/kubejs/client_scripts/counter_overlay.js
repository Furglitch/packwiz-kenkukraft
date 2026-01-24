let deathCount = 0
let tickCounter = 0

NetworkEvents.dataReceived('death_update', event => {
    deathCount = event.data.count
})

ClientEvents.tick(event => {
    tickCounter++
    if (tickCounter < 20) return // Update every 20 ticks (1 second)
    tickCounter = 0
    if (event.player == null) return
    
    let currentDay = Math.floor(event.player.level.getDayTime() / 24000)
    
    let dayColor = currentDay >= 30 ? '§c' : '§f'  // §c = red, §f = white
    
    Painter.paint(event.player, {
        day_counter: {
            type: 'text',
            text: [
                `§fDay: ${dayColor}${currentDay}`,
                `§fDeaths: ${deathCount}`
            ],
            x: 5,
            y: 5,
            alignY: 'top',
            alignX: 'left',
            lineSpacing: 1.3,
            scale: 0.8,
            shadow: true,
            draw: 'ingame'
        }
    })
})
