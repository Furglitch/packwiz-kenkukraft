# TODO List

- [ ] Compact Machines

- [ ] Cooking for Blockheads

- [ ] Farmer's Delight
    - [ ] Aquaculture Delight
    - [ ] Arbitrary Delight
    - [ ] Ars Nouveau's Flavors and Delight
    - [ ] Barbeque's Delight
    - [ ] Brewin' And Chewin'
    - [ ] Cocktails Delight
    - [ ] Crate Delign
        - [ ] Crate Delight: Croptopia
    - [ ] Create: Central Kitchen
    - [ ] Create: Food
    - [ ] Create: Integrated Farming
    - [ ] Create: Slice & Dice
    - [ ] Croptopia Delight
    - [ ] Cultural Delights
    - [ ] Ender's Delight
    - [ ] More Delight
    - [ ] My Nether's Delight
    - [ ] Ocean's Delight
    - [ ] Rustic Delight
    - [ ] Veggies Delight
    - [ ] Storage Delight
- [ ] Farmer's Cutting

- [ ] Croptopia
    - [ ] Croptopia Delight

- [ ] Vanilla Enchanting
    - [ ] Enchanting Infuser

- [ ] Ars Nouveau
    - [ ] Ars Additions
    - [ ] Ars Affinity
    - [ ] Ars Artillery
    - [ ] Ars Creo
    - [ ] Ars Elemancy
    - [ ] Ars Elemental
    - [ ] Ars Polymorphia
    - [ ] Ars Technica
    - [ ] Ars Unification
    - [ ] Not Enough Glyphs
    - [ ] StarbuncleMania

- [ ] Iron's Spells
    - [ ] Alshanex's Familiars
    - [ ] Create: Wizardry
    - [ ] Dark Doppelganger
    - [ ] GTBC's Spellbooks - Iron's Spells Addon
    - [ ] Iron's Gems 'n Jewelry
    - [ ] T.O Magic 'n Extras - Iron's Spells Addon

- [ ] Friendly Mobs
    - [ ] Aquaculture 2
    - [ ] Earth Mobs
    - [ ] Friends and Foes
    - [ ] Koopa's Critters
    - [ ] Pets (Dog, Cat, Parrot, Horse/Donkey/Mule/Llama)
        - [ ] Pet Cemetery

- [ ] Hostile Mobs
    - [ ] Friends & Foes

- [ ] Bosses
    - [ ] Bosses of Mass Destruction
    - [ ] Bosses'Rise
    - [ ] L_Ender's Cataclysm
    - [ ] Mowzie's Mobs

- [ ] Structures(?)
- [ ] Biomes (?)
    - [ ] Vanilla
    - [ ] Biomes O' Plenty
    - [ ] Oh The Biomes You'll Go
    - [ ] Regions Unexplored
- [ ] Vanilla Dimensions (?)

- [ ] Create Addons
    - [ ] Create Cobblestone
    - [ ] Create Crafts & Additions
    - [ ] Create Encased
    - [ ] Create Goggles (Create Plus)
    - [ ] Create Jetpack
    - [ ] Create Mechanical Extruder
    - [ ] Create Mechanical Spawner
    - [ ] Create Stuff 'N Additions
    - [ ] Create: Bells & Whistles
    - [ ] Create: Bitterballen
    - [ ] Create: Blocks & Bogies
    - [ ] Create: Cardboard Things
    - [ ] Create: Chimneys
    - [ ] Create: Connected
    - [ ] Create: Copycats+
    - [ ] Create: Deep Dark
    - [ ] Create: Delivery Director
    - [ ] Create: Design n' Decor
    - [ ] Create: Dragons Plus
    - [ ] Create: Dreams n' Desires
    - [ ] Create: Enchantment Industry
    - [ ] Create: Ender Link
    - [ ] Create: Extra Gauges
    - [ ] Create: Fishing Bobber Detector
    - [ ] Create: Let The Adventure Begin
    - [ ] Create: Misc & Things
    - [ ] Create: Mobile Packages
    - [ ] Create: New Beginnings
    - [ ] Create: Pattern Schematics
    - [ ] Create: Power Loader
    - [ ] Create: Randomize Filters
    - [ ] Create: Sound of Steam
    - [ ] Create: Stam1o Tweaks
    - [ ] Create: Transmission!
    - [ ] Create: Ultimate Factory
    - [ ] Create: Vibrant Vaults

- [ ] Mekanism Addons
    - [ ] Mekanism Additions
    - [ ] Mekanism Covers
    - [ ] Mekanism Generators
    - [ ] Mekanism Tools
    - [ ] More Mekanism Processing

- [ ] Oritech Addons
    - [ ] Create Oritech Compat
    - [ ] Extended Oritech
    - [ ] Oritech Tings

- [ ] Refine Oritech Quests


```
// Prevent spore entities from spawning for 30 days
EntityEvents.spawned('spore:*', event => {
    let world = event.level
    let worldTime = world.getDayTime() / 24000
    
    if (worldTime < 30) {
        event.cancel()
    }
})
```