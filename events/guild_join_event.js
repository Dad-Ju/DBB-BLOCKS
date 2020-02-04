module.exports = {
    "name": "Guild Join (Create) [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When the Bot joins a Guild, this event will trigger",

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
            "name": "guild",
            "title": "Guild",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The joined Guild"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'guildCreate' , (guild) => { 
            this.StoreOutputValue( guild , 'guild' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}