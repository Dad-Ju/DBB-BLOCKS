module.exports = {
    name: "Get Arguments",

    author: "Dad_Ju aka Ju#2402",

    description: "Get the Arguments from your Command Message\nArguments (0 = command, 1 = first argument,2 = second argument,...)",

    category: "Message Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "message",
            "title": "Message",
            "description": "The Message to get the Arguments from.",
            "types": ["object"]
        },
        {
            "name": "number",
            "title": "Number",
            "description": "The number of the Argument (0 = command, 1 = first arfgument, ...) leave empty for the List",
            "types": ["number"]
        }
    ],

    options: [
        {
            "name": "output-type",
            "title": "Output Type",
            "description": "Description: What should the Output be?",
            "type": "SELECT",
            "options": {
                1: "Full List",
                2: "List without Command",
                3: "1 Item by Number",
                4: "Content without Command"
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
            "name": "item",
            "title": "Item",
            "description": "Type: Text, List, Undefined\n\nDescription: The List or the Value (Text) if a Number is Given.",
            "types": ["text", "list", "unspecified"]
        }
    ],

    code: function(cache) {
        var msg = this.GetInputValue("message", cache);
        var number = this.GetInputValue("number", cache);
        var output_type = this.GetOptionValue("output-type", cache);
        var argumentlist = msg.content.split(" ");
        var fcreturn;
        if(output_type == 1){
            fcreturn = argumentlist;
        }
        if(output_type == 2){
            fcreturn = argumentlist.slice(1 , argumentlist.length);
        }
        //console.log(number);
        if(typeof number != "undefined" && output_type == 3){
            fcreturn = argumentlist[number];
        }
        if(output_type == 4){
            fcreturn = argumentlist.slice(1, argumentlist.length).join(" ");
        }
        this.StoreOutputValue(fcreturn, "item", cache);
        this.RunNextBlock("action", cache);
    }
};