// FTB Quest task to track days
FTBQuestsEvents.customTask('1A81BA9350B2B38B', event => {
    event.maxProgress = 30 // days
    event.setCheckTimer(20) // ticks
    
    event.setCheck((task, player) => {
        let serverDays = Math.floor(player.level.getDayTime() / 24000)
        
        if (serverDays > task.progress) {
            task.progress = serverDays
        }
    })
})

// Prevent spore mobs from spawning before day 30
EntityEvents.spawned(event => {
    let entity = event.entity
    let entityType = entity.type
    
    if (entityType.toString().startsWith('spore:')) {
        let world = event.level
        let worldTime = world.getDayTime() / 24000
        
        if (worldTime < 30) {
            event.cancel()
        }
    }
})