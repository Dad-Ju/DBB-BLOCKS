module.exports = {
    "name": "Guild Ban Add [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Member is banned from a Guild, this event will trigger",

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
            "description": "Type: Object\n\nDescription: The Guild that the ban occurred in"
        },
        {
            "name": "user",
            "title": "User",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The User that was banned"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'guildBanAdd' , (guild, User) => { 
            this.StoreOutputValue( guild , 'guild' , cache); 
            this.StoreOutputValue( User , 'User' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}