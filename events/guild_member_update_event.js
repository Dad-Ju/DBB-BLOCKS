module.exports = {
    "name": "Guild Member Update [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When a guild member changes - i.e. new role, removed role, nickname, this event will trigger",
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
            "description": "Type: Object\n\nDescription: The member before the update"
        },
        {
            "name": "newmember",
            "title": "new Member",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The member after the update"
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