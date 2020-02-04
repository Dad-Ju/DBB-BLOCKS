module.exports = {
    name: "Text to JSON-Object",

    description: "Parse an text to an JSON-Object.",

    category: "Advanced",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "text",
            "title": "Text",
            "description": "Acceptable Types: Unspecified, Text\n\nDescription: The Text that you want to convert to a JSON-Object.",
            "types": ["unspecified", "text"]
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
            "name": "output",
            "title": "Output",
            "description": "Type: Object\n\nDescription: The Object that got paresed from the Text.",
            "types": ["object"]
        },
        {
            "name": "error",
            "title": "Error",
            "description": "Type: Action\n\nDescription: Executes blocks, if an Error occor.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const text = this.GetInputValue("text", cache);
        let obj;
        try {
            obj = JSON.parse(text);
            this.SetOutputValue("output", cache);
            this.RunNextBlock("action", cache);
        } catch (error) {
            console.log(error);
            this.RunNextBlock("error", cache);
        }
    }
};