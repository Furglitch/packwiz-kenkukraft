// Eye Tracker
FTBQuestsEvents.customTask('554046209DE82984', event => {
    console.log('[KENKU-DEBUG] Initializing custom task for Endrem Eyes')
    event.maxProgress = 12
    event.setCheckTimer(20)
    
    event.setCheck((task, player) => {
        const playerData = player.persistentData
        if (!playerData.contains('endremCollectedCount')) {
            playerData.putInt('endremCollectedCount', 0)
        }
        if (!playerData.contains('endremCollected')) {
            playerData.putString('endremCollected', '')
        }
        let endremCount = playerData.getInt('endremCollectedCount')
        let endremCollectedStr = playerData.getString('endremCollected')
        let endremCollected
        if (endremCollectedStr === '' || endremCollectedStr.length === 0) {
            endremCollected = []
        } else {
            endremCollected = String(endremCollectedStr).split(',')
        }
        
        // Check inventory for new eyes
        player.inventory.allItems.forEach(item => {
            if (getEyes('id').includes(item.id)) {
                let itemIdStr = String(item.id)
                let alreadyCollected = false
                
                for (let i = 0; i < endremCollected.length; i++) {
                    if (String(endremCollected[i]) === itemIdStr) {
                        alreadyCollected = true
                        break
                    }
                }
                
                if (!alreadyCollected) {
                    endremCollected.push(itemIdStr)
                    playerData.putString('endremCollected', endremCollected.join(','))
                    endremCount += 1
                    playerData.putInt('endremCollectedCount', endremCount)
                }
            }
        })
        
        task.progress = endremCount
    })
})


// Eye List
function getEyes(type, match) {
    if (typeof match === 'undefined') match = null

    const eyesList = [
        'endrem:old_eye',
        'endrem:nether_eye',
        'endrem:cold_eye',
        'endrem:rogue_eye',
        'endrem:black_eye',
        'endrem:magical_eye',
        'endrem:lost_eye',
        'endrem:corrupted_eye',
        'endrem:wither_eye',
        'endrem:guardian_eye',
        'endrem:witch_eye',
        'endrem:cursed_eye',
        'endrem:exotic_eye',
        'endrem:evil_eye',
        'endrem:undead_eye',
        'endrem:cryptic_eye'
    ]

    const eyeNames = [
        'Old Eye',
        'Nether Eye',
        'Cold Eye',
        'Rogue Eye',
        'Black Eye',
        'Magical Eye',
        'Lost Eye',
        'Corrupted Eye',
        'Wither Eye',
        'Guardian Eye',
        'Witch Eye',
        'Cursed Eye',
        'Exotic Eye',
        'Evil Eye',
        'Undead Eye',
        'Cryptic Eye'
    ]

    if (type === 'id' && match === null) {
        return eyesList
    } else if (type === 'id' && match !== null) {
        if (eyeNames.includes(match)) {
            return true
        }
    } else if (type === 'name' && match !== null) {
        let index = eyesList.indexOf(match)
        return eyeNames[index]
    }
}