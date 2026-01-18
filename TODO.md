# TODO List

- [X] Compact Machines

- [X] Cooking for Blockheads

- [X] Farmer's Delight
    - [X] Aquaculture Delight (aquaculturedelight)
    - [X] Arbitrary Delight (arbitrarydelight)
    - [X] Ars Nouveau's Flavors and Delight (arsdelight)
    - [X] Barbeque's Delight (barbequesdelight)
    - [X] Brewin' And Chewin' (brewinandchewin)
    - [X] Cocktails Delight (cocktailsdelight)
    - [X] Crate Delight (cratedelight)
    - [X] Create: Food (createfood)
    - [X] Cultural Delights (culturaldelights)
    - [X] Ender's Delight (endersdelight)
    - [X] More Delight (moredelight)
    - [X] My Nether's Delight (mynethersdelight)
    - [X] Ocean's Delight (oceansdelight)
    - [X] Rustic Delight (rusticdelight)
    - [X] Veggies Delight (veggiesdelight)
-
- [X] Croptopia

- [X] Vanilla Enchanting
    - [X] BeyondEnchant
    - [X] Enchanting Infuser

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

- [ ] Refine Oritech Quests

- [ ] Oritech Addons
    - [ ] Create Oritech Compat
    - [ ] Extended Oritech
    - [ ] Oritech Tings


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
- [ ] Replace 'Mob Control' with above script
- [ ] Move KubeJS scripts to Smart Filters (after mod update)
- [ ] Update 'Update' workflow to 3 days instead of 5
- [ ] Disable /locate in favor of compasses
- [ ] Update splashes
- [ ] Create Issue Templates

## Mods to Consider Adding
- [ ] Modpack Update Checker
- [ ] Figura
- [ ] Customizable Player Models
- [ ] Drippy Loading Screen
- [ ] CreateJS
- [ ] Ponder for KubeJS
- [ ] Create Easy Stone Generator <- Replacing Create Cobblestone