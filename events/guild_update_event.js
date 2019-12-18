module.exports = {
    "name": "Guild Update [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When a guild is updated - e.g. name change, this event will trigger",
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
            "name": "oldguild",
            "title": "old Guild",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The guild before the update"
        },
        {
            "name": "newguild",
            "title": "new Guild",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The guild after the update"
        }
    ],
    "code": function(cache){
        this.client.on( 'guildUpdate' , (oldguild, newguild) => { 
            this.StoreOutputValue( oldguild , 'oldguild' , cache); 
            this.StoreOutputValue( newguild , 'newguild' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}