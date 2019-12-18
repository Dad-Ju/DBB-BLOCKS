module.exports = {
    "name": "Message Reaction Add [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When a reaction is added to a cached message, this event will trigger",
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
            "name": "messagereaction",
            "title": "MessageReaction",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The reaction object"
        },
        {
            "name": "user",
            "title": "User",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The user that applied the emoji or reaction emoji"
        }
    ],
    "code": function(cache){
        this.client.on( 'messageReactionAdd' , (messagereaction, user) => { 
            this.StoreOutputValue( messagereaction , 'messagereaction' , cache); 
            this.StoreOutputValue( user , 'user' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}