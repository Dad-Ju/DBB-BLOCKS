module.exports = {
    "name": "Emoji Update [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Custom Guild Emoji is updated, this event will trigger",

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
            "name": "oldemoji",
            "title": "old Emoji",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The old Emoji"
        },
        {
            "name": "newemoji",
            "title": "new Emoji",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The new Emoji"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'emojiUpdate' , (oldemoji, newemoji) => { 
            this.StoreOutputValue( oldemoji , 'oldemoji' , cache); 
            this.StoreOutputValue( newemoji , 'newemoji' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}