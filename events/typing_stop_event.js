module.exports = {
    "name": "Typing Stop [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a User stops typing in a Channel (BY USE CAN DECRESE SPEED OF THE BOT), this event will trigger",

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
            "name": "channel",
            "title": "Channel",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Channel the User stopped typing in"
        },
        {
            "name": "user",
            "title": "User",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The User that stopped typing"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'typingStop' , (channel, user) => { 
            this.StoreOutputValue( channel , 'channel' , cache); 
            this.StoreOutputValue( user , 'user' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}