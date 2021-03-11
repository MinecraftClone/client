var hook_api = Java.type("com.glowman554.block.discord.WebHookAPI");
var api = Java.type("com.glowman554.block.mod.ModAPI");
var main = Java.type("com.glowman554.block.BlockGame");

var hook = "https://discord.com/api/webhooks/818509367837589597/xfaiBbeDkQNgdnbLaLTrQn2mgZRdtMxQAaLVzNsZ6DIR_AI6JyyqrO5ZMxctS9rMaFvc";
var icon = "https://github.com/MinecraftClone-reloaded/client/raw/main/core/assets/texture/Grass.PNG";

function load() {
}

function enable() {
    try {
        api.sendHookMessage(hook, "The player " + main.game.username + " started the game", "MinecraftClone", icon);
    } catch(e) {
        print(e);
    }
}

function disable() {
    try {
        api.sendHookMessage(hook, "The player " + main.game.username + " stopped the game", "MinecraftClone", icon);
    } catch(e) {
        print(e);
    }
}