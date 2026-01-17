ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    
    event.register(
        Commands.literal('dumpmod')
            .then(Commands.argument('modId', Arguments.STRING.create(event))
                .executes(ctx => {
                    const modId = Arguments.STRING.getResult(ctx, 'modId');
                    dumpModRegistries(modId, ctx.source.server);
                    ctx.source.sendSuccess(Text.of(`Registry dump complete for: ${modId}`), false);
                    return 1;
                })
            )
    );
});

function dumpModRegistries(modId, server) {
    const Registries = Java.loadClass('net.minecraft.core.registries.Registries');
    const registryAccess = server.registryAccess();
    
    dumpCombinedRegistry(modId, registryAccess, Registries.ITEM, Registries.BLOCK, 'items_blocks');
    dumpRegistry(modId, registryAccess, Registries.ENTITY_TYPE, 'entities');
    dumpRegistry(modId, registryAccess, Registries.BIOME, 'biomes');
    dumpRegistry(modId, registryAccess, Registries.MOB_EFFECT, 'status_effects');
    dumpRegistry(modId, registryAccess, Registries.FLUID, 'fluids');
    dumpRegistry(modId, registryAccess, Registries.STRUCTURE, 'structures');
    dumpRegistry(modId, registryAccess, Registries.CUSTOM_STAT, 'statistics');
    dumpAdvancements(modId, server);
}

function dumpRegistry(modId, registryAccess, registryKey, filename) {
    try {
        let targetRegistry = registryAccess.registryOrThrow(registryKey);
        let entries = [];
        
        targetRegistry.keySet().forEach(key => {
            const entryId = key.toString();
            if (entryId.startsWith(modId + ':')) {
                entries.push(entryId);
            }
        });
        
        if (entries.length > 0) {
            JsonIO.write(`kubejs/${modId}_${filename}.txt`, entries);
            console.log(`Exported ${entries.length} ${filename} from ${modId}`);
        } else {
            console.log(`No ${filename} found for ${modId}`);
        }
    } catch (e) {
        console.log(`Could not dump ${filename}: ${e}`);
    }
}

function dumpCombinedRegistry(modId, registryAccess, registryKeyA, registryKeyB, filename) {
    try {
        let entries = [];

        [registryKeyA, registryKeyB].forEach(regKey => {
            let targetRegistry = registryAccess.registryOrThrow(regKey);
            targetRegistry.keySet().forEach(key => {
                const entryId = key.toString();
                if (entryId.startsWith(modId + ':') && entries.indexOf(entryId) === -1) {
                    entries.push(entryId);
                }
            });
        });

        if (entries.length > 0) {
            JsonIO.write(`kubejs/${modId}_${filename}.txt`, entries);
            console.log(`Exported ${entries.length} ${filename} from ${modId}`);
        } else {
            console.log(`No ${filename} found for ${modId}`);
        }
    } catch (e) {
        console.log(`Could not dump ${filename}: ${e}`);
    }
}

function dumpAdvancements(modId, server) {
    try {
        let advancementManager = server.getAdvancements();
        let entries = [];
        
        advancementManager.getAllAdvancements().forEach(advancement => {
            let advId = advancement.id().toString();
            if (advId.startsWith(modId + ':')) {
                entries.push(advId);
            }
        });
        
        if (entries.length > 0) {
            JsonIO.write(`kubejs/${modId}_advancements.txt`, entries);
            console.log(`Exported ${entries.length} advancements from ${modId}`);
        } else {
            console.log(`No advancements found for ${modId}`);
        }
    } catch (e) {
        console.log(`Could not dump advancements: ${e}`);
    }
}
