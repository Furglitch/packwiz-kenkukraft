ServerEvents.command("locate", event => {
    const { input, parseResults } = event;
    const args = input.split(" ");
    
    // Check if the command is /locate structure
    if (args.length >= 2 && args[1] === "structure") {
        parseResults.context.source.player.tell("This command is disabled. Please use Explorer's Compass to locate structures instead.");
        event.cancel();
    }
    
    // Check if the command is /locate biome
    if (args.length >= 2 && args[1] === "biome") {
        parseResults.context.source.player.tell("This command is disabled. Please use Nature's Compass to locate biomes instead.");
        event.cancel();
    }
});
