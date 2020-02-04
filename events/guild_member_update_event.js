module.exports = {
    "name": "Guild Member Update [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Guild-Member changes - i.e. new Role, removed Role, Nickname, this event will trigger",

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
            "name": "oldmember",
            "title": "old Member",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Member before the update"
        },
        {
            "name": "newmember",
            "title": "new Member",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Member after the update"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'guildMemberUpdate' , (oldmember, newmember) => { 
            this.StoreOutputValue( oldmember , 'oldmember' , cache); 
            this.StoreOutputValue( newmember , 'newmember' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}