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