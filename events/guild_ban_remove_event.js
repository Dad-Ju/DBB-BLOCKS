module.exports = {
    "name": "Guild Ban Remove [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Member is unbanned from a Guild, this event will trigger",

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
            "description": "Type: Object\n\nDescription: The Guild that the unban occurred in"
        },
        {
            "name": "user",
            "title": "User",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The User that was unbanned"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'guildBanRemove' , (guild, user) => { 
            this.StoreOutputValue( guild , 'guild' , cache); 
            this.StoreOutputValue( user , 'user' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}