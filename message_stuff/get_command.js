module.exports = {
    name: "Get Command",

    author: "Dad_Ju aka Ju#2402",

    description: "Get The Command with or without Prefix from a Message",

    category: "Message Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "prefix",
            "title": "Command-Prefix",
            "description": "Acceptable Types: text. The Prefix from your Command",
            "types": ["text"]
        },
        {
            "name": "message",
            "title": "Message",
            "description": "The Message to get the Command from!",
            "types": ["object"]
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
            "name": "command",
            "title": "The Command",
            "description": "Type: text, undefined\n\nDescription: The Command.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const prefix = this.GetInputValue("prefix", cache);
        const msg = this.GetInputValue("message", cache);
        var fcreturn;
        var command = msg.content.split(" ")[0];
        fcreturn = command;
        if(prefix.length > 0){
            fcreturn = command.toString().slice(prefix.length, command.length);
        }
        this.StoreOutputValue(fcreturn, "command", cache);
        this.RunNextBlock("action", cache);
    }
};
