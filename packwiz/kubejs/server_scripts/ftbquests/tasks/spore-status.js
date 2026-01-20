FTBQuestsEvents.customTask('18BF498E95684155', event => {
    event.setCheckTimer(20)
    event.setCheck((task, player) => {
        if (player.hasEffect('spore:mycelium_ef')) {
            task.progress++
        }
    })
})

FTBQuestsEvents.customTask('6472E793795F1AEF', event => {
    event.setCheckTimer(20)
    event.setCheck((task, player) => {
        if (player.hasEffect('spore:symbiosis')) {
            task.progress++
        }
    })
})

FTBQuestsEvents.customTask('44409E6178ACA35B', event => {
    event.setCheckTimer(20)
    event.setCheck((task, player) => {
        if (player.hasEffect('spore:madness')) {
            task.progress++
        }
    })
})
