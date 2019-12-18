module.exports = {
    name: "Get Item from Collection",

    author: "Dad_Ju aka Ju#2402",

    description: "Get an Item from a Collection.",

    category: "Extras",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "collection",
            "title": "Collection",
            "description": "Acceptable Types: Collection.",
            "types": ["collection"]
        },
        {
            "name" : "id",
            "title" : "ID",
            "description": "Acceptable Types: text. The ID to Search for",
            "types": ["text"]
        },
        {
            "name": "number",
            "title": "number",
            "description": "Type: Number\n\nDescription: If you need a Number.",
            "types": ["number"]
        }
    ],

    options: [
        {
            "name": "option",
            "title": "Get Item by",
            "description": "Get stuff from a Collection via different ways",
            "type": "SELECT",
            "options": {
                1: "ID",
                2: "First Item",
                3: "Last Item"
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
            "description": "Type: unspecified\n\nDescription: The value from the Item.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const collection = this.GetInputValue("collection", cache);
        const id = this.GetInputValue("id", cache);
        const number = this.GetInputValue("number", cache) || 0;
        const SELECT = parseInt(this.GetOptionValue("option", cache));
        var item;

        if(SELECT == 1){
            item = collection.get(id.toString());
        }else if(SELECT == 2){
            if(number < 1){
                item = collection.first();
            }else{
                item = collection.first(number);
            }
        }else if(SELECT == 3){
            if(number < 1){
                item = collection.last();
            }else{
                item = collection.last(number);
            }
        }

        this.StoreOutputValue(item, "item", cache);
        this.RunNextBlock("action", cache);
    }
};