module.exports = {
    "name": "Message Reaction Remove [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When a reaction is removed from a cached message, this event will trigger",
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
            "description": "Type: Object\n\nDescription: The user whose emoji or reaction emoji was removed"
        }
    ],
    "code": function(cache){
        this.client.on( 'messageReactionRemove' , (messagereaction, user) => { 
            this.StoreOutputValue( messagereaction , 'messagereaction' , cache); 
            this.StoreOutputValue( user , 'user' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}
