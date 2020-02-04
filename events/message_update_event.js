module.exports = {
    "name": "Message Update [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Message is updated - e.g. Embed or Content change, this event will trigger",

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
            "description": "Type: Object\n\nDescription: The Message before the update"
        },
        {
            "name": "newmsg",
            "title": "new Message",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Message after the update"
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