let namedTimes = {
    'day': 1000,
    'noon': 6000,
    'night': 13000,
    'midnight': 18000
}

// Override `/time set` command
// - Preserves the current day when using named times (day, noon, night, midnight) or `s`/`t` suffixes
// - When setting the day to less than 30 using 'd' suffix, resets the "Spore" FTB Quest chapter

ServerEvents.command("time", event => {
    let input = event.input
    let args = input.split(" ")
    let server = event.server
    
    if (args.length < 3 || args[1] !== "set") return
    let timeVal = args[2].toLowerCase()
    
    if (namedTimes[timeVal] !== undefined) {
        let world = server.overworld()
        let currentTime = world.getDayTime()
        let currentDay = Math.floor(currentTime / 24000)
        let baseDayTime = currentDay * 24000
        
        let newTime = baseDayTime + namedTimes[timeVal]
        
        server.getAllLevels().forEach(level => {
            level.setDayTime(newTime)
        })
        
        server.tell(`Set the time to ${newTime}`)
        event.cancel()
    }

    else if (timeVal.endsWith('s') || timeVal.endsWith('t')) {
        let world = server.overworld()
        let currentTime = world.getDayTime()
        let currentDay = Math.floor(currentTime / 24000)
        let baseDayTime = currentDay * 24000
        
        let ticks = 0
        if (timeVal.endsWith('s')) {
            ticks = parseInt(timeVal.slice(0, -1)) * 20
        } else if (timeVal.endsWith('t')) {
            ticks = parseInt(timeVal.slice(0, -1))
        }
        
        let newTime = baseDayTime + ticks
        server.getAllLevels().forEach(level => {
            level.setDayTime(newTime)
        })
        
        server.tell(`Set the time to ${newTime}`)
        event.cancel()
    }

    else if (timeVal.endsWith('d')) {
        let dayVal = parseInt(timeVal.slice(0, -1))
        
        if (!isNaN(dayVal) && dayVal < 30) {
            server.runCommandSilent('ftbquests change_progress @a reset 32F8B67559CA3FE0')
        }
    }
})
