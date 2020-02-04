module.exports = {
    "name": "Emoji Delete [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Custom Emoji is deleted in a Guild, this event will trigger",

    "category": "Events",

    "auto_execute": true,

    "inputs": [],

    "options": [],

    "outputs": [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": [
                "action"
            ]
        },
        {
            "name": "emoji",
            "title": "Emoji",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Emoji that was deleted"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'emojiDelete' , (emoji) => { 
            this.StoreOutputValue( emoji , 'emoji' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}