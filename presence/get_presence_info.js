module.exports = {
    name: "Get Info from Presence",

    author: "Dad_Ju aka Ju#2402",

    description: "Get Informtion from a Presence.",

    category: "Presence Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "presence",
            "title": "Presence",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The Presence to get the Information from.",
            "types": ["object", "unspecified"]
        }
    ],

    options: [
        {
            "name": "info",
            "title": "Presence Info",
            "description": "Description: What you want to get.",
            "type": "SELECT",
            "options": {
                1: "Status (online, offline, dnd)[Text]",
                2: 'Game Name [Text]',
                3: "Game Text (or from Custom Status)[Text]",
                4: "Status Typ [Text]",
                5: "Streaming this Game[Boolean]",
                6: "Stream URL[Text]"
            }
        }
    ],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        },
        {
            "name": "output",
            "title": "Information",
            "description": "Type: Text, Unspecified\n\nDescription: The Information from the Presence.",
            "types": ["unspecified", "text"]
        }
    ],

    code: function(cache) {
        const presence = this.GetInputValue("presence", cache).toString();

        const option = parseInt(this.GetOptionValue("info", cache));
        let info;

        function tarnslateType(number){
            switch(number){
                case 0: return "playing"; break;
                case 1: return "streaming"; break;
                case 2: return "listening"; break;
                case 3: return "watching"; break;
                case 4: return "customstatus"; break;
            }
        }

        switch(option){
            case 1: info = presence.status; break;
            case 2: info = presence.game.name || ""; break;
            case 3: info = presence.game.state || ""; break;
            case 4: info = tarnslateType(presence.game.type) || ""; break;
            case 5: info = presence.game.streaming || ""; break;
            case 6: info = presence.game.url || "";  break;
        }

        this.SetOutputValue(info, "output", cache);
        this.RunNextBlock("action", cache);
    }
};