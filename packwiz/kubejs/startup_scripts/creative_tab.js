Platform.mods.kubejs.name = 'KenkuKraft: Infected'

StartupEvents.registry('creative_mode_tab', event => {
	event.create('kenkukraft').icon(() => 'kubejs:music_disc_anhedonia').content(() => [
		'kubejs:music_disc_anhedonia',
        'kubejs:music_disc_lost_souls',
        'kubejs:music_disc_pain'
	])
    .displayName('KenkuKraft: Infected')
})

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
    event.remove('kubejs:music_disc_anhedonia')
    event.remove('kubejs:music_disc_lost_souls')
    event.remove('kubejs:music_disc_pain')
})