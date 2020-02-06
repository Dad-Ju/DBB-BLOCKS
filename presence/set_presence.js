module.exports = {
    name: "Set Presence",

    author: "Dad_Ju aka Ju#2402",

    description: "Set a Presence for the Bot.",

    category: "Presence Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "name",
            "title": "Text",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The Text that gets shown after the Action.",
            "types": ["text", "unspecified"]
        },
        {
            "name": "url",
            "title": "URL (optinal)",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: Is Option is streaming your Stream URL (or any other link).",
            "types": ["text", "unspecified"]
        }
    ],

    options: [
        {
            "name": "type",
            "title": "Presence Type",
            "description": "Description: What type should be set.",
            "type": "SELECT",
            "options": {
                "PLAYING": "Playing 'Text'",
                "STREAMING": "Streaming 'Text'",
                "LISTENING": "Listening 'Text'",
                "WACHING": "Watching 'Text'"
            }
        }
    ],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        }
    ],

    code: async function(cache) {
        const name = this.GetInputValue("name", cache).toString();
        const url = this.GetInputValue("url", cache).toString() || null;
        const mode = this.GetOptionValue("type", cache).toString();

        try {
            await this.client.setActivity(name, { type: mode, url : url});
            this.RunNextBlock("action", cache);
        } catch (error) {
            console.log(error);
        }
    }
};