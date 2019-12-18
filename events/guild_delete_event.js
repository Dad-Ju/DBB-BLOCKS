module.exports = {
    "name": "Guild Delete (Leave) [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When a guild is deleted/left, this event will trigger",
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
            "description": "Type: Object\n\nDescription: The guild that was deleted / left"
        }
    ],
    "code": function(cache){
        this.client.on( 'guildDelete' , (guild) => { 
            this.StoreOutputValue( guild , 'guild' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}