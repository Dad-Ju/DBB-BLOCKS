module.exports = {
    name: "Join Voice Channel",

    author: "Dad_Ju aka Ju#2402",

    description: "Join a Voice Channel.",

    category: "Voice",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "guild",
            "title": "Server",
            "description": "The Server from where the Bot should Join a Voice Channel.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "voice",
            "title": "Voice Channel/-ID",
            "description": "The Voice Channel or the ID to Join in.",
            "types": ["object", "text", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        },
        {
            "name": "channel",
            "title": "Channel",
            "description": "Type: Object\n\nDescription: The Joined Voice Channel.",
            "types": ["object", "text", "unspecified"]
        },
        {
            "name": "error",
            "title": "ERROR",
            "description": "Type: Action\n\nDescription: Executes blocks on Error.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const guild = this.GetInputValue("guild", cache);
        var inputchannel = this.GetInputValue("voice", cache);
        var channel;
        if(typeof guild == "object"){
            if(typeof inputchannel != "object" && typeof inputchannel == "string"){
                channel = guild.channels.get(inputchannel.replace("\n", "").replace(" " , ""));
            }else{
                channel = inputchannel;
            }
            if(typeof channel == "object" && channel.type == "voice"){
                try {
                    channel.join();
                    this.StoreOutputValue(channel, "channel", cache);
                    this.RunNextBlock("action", cache);
                } catch (error) {
                    console.log("[JOINE VOICE]: ", error);
                    this.RunNextBlock("error", cache);
                }
            }else{
                console.log("[JOINE VOICE]: NEED AN CHANNEL WITH TYPE VOICE");
                this.RunNextBlock("error", cache);
            }
        }else{
            console.log("[JOINE VOICE]: NEED THE GUILD OBJECT TO JOIN A CHANNEL!!!");
            this.RunNextBlock("error", cache);
        }
    }
};
