var path = require("path");
module.exports = {
    name: "Play File",

    author: "Dad_Ju aka Ju#2402",

    description: "Play a File in a Voicechannel.",

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
            "name": "filepath",
            "title": "Path to File",
            "description": "The Path to the file (./data/music.mp3)",
            "types": ["text", "unspecified"]
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
            "name": "end",
            "title": "File End",
            "description": "Type: Action\n\nDescription: Executes blocks after File is Played.",
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
        var filepath = this.GetInputValue("filepath", cache);
        if(typeof guild == "object"){
            var voicecon = guild.voiceConnection;
            if(voicecon){
                var fullpath = path.join(__dirname + "/../" + filepath);
                var disp = voicecon.playFile(fullpath, { volume : 0.5, bitrate : "auto", passes : 3});
                this.RunNextBlock("action", cache);
                disp.once("end", _ => {
                    this.RunNextBlock("end", cache);
                });
            }else{
                console.log("[PLAY FILE]: Not connected to a Voice in this Guild.")
                this.RunNextBlock("error", cache);
            }            
        }else{
            console.log("[PLAY FILE]: NEED THE GUILD OBJECT TO INTERACT WITH VOICE!!!");
            this.RunNextBlock("error", cache);
        }
    }
};