module.exports = {
    name: "Leave Voice Channel",

    author: "Dad_Ju aka Ju#2402",

    description: "Leave a Voice Channel.",

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
            "name": "error",
            "title": "ERROR",
            "description": "Type: Action\n\nDescription: Executes blocks on Error.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const guild = this.GetInputValue("guild", cache);
        var channel;
        if(typeof guild == "object"){
            if(guild.voiceConnection){
                guild.voiceConnection.disconnect();
            }else{
                console.log("Arent Connected to a Chnnel on this Guild");
            }
            this.RunNextBlock("action", cache);
        }else{
            console.log("[JOINE VOICE]: NEED THE GUILD OBJECT TO JOIN A CHANNEL!!!");
            this.RunNextBlock("error", cache);
        }
    }
};