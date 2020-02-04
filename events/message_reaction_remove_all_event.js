module.exports = {
    "name": "Message Reaction Remove All [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When all Reactions are removed from a cached Message, this event will trigger",

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
            "name": "message",
            "title": "Message",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Message the Reactions were removed from"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'messageREactionRemoveAll' , (message) => { 
            this.StoreOutputValue( message , 'message' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}