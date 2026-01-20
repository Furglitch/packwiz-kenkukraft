FTBQuestsEvents.customTask('711DB8D70C2E1F3E', event => {
    event.setCheckTimer(100) // every 5 seconds
    
    event.setCheck((task, player) => {
        let playerData = player.nbt;
        
        if (playerData.contains("neoforge:attachments")) {
            let attachments = playerData.getCompound("neoforge:attachments");
            if (attachments.contains("dragonsurvival:dragon_handler")) {
                let dragonHandler = attachments.getCompound("dragonsurvival:dragon_handler");
                if (dragonHandler.contains("dragon_body")) {
                    task.progress++
                }
            }
        }
    })
})
