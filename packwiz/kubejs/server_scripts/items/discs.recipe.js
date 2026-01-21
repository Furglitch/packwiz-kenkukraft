ServerEvents.recipes(event => {
    event.shaped(
        'kubejs:music_disc_anhedonia',
        [
            ' M ',
            'MDM',
            ' M '
        ],
        {
            D: '#c:music_discs',
            M: '#c:mushrooms'
        }
    )
    
    event.shaped(
        'kubejs:music_disc_lost_souls',
        [
            ' M ',
            'MDM',
            ' M '
        ],
        {
            D: '#c:music_discs',
            M: ['#c:foods/raw_meat']
        }
    )
    
    event.shaped(
        'kubejs:music_disc_pain',
        [
            ' R ',
            'RDR',
            ' R '
        ],
        {
            D: '#c:music_discs',
            R: 'minecraft:rotten_flesh'
        }
    )
})
