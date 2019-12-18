module.exports = {
    "name": "Message Update [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When a message is updated - e.g. embed or content change, this event will trigger",
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
            "name": "oldmsg",
            "title": "old Message",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The message before the update"
        },
        {
            "name": "newmsg",
            "title": "new Message",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The message after the update"
        }
    ],
    "code": function(cache){
        this.client.on( 'messageUpdate' , (oldmsg, newmsg) => { 
            this.StoreOutputValue( oldmsg , 'oldmsg' , cache); 
            this.StoreOutputValue( newmsg , 'newmsg' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}