module.exports = {
    "name": "Message Delete Bulk [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When messages are deleted in bulk (from a Bot), this event will trigger",
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
            "name": "messages",
            "title": "Messages",
            "types": [
                "collection"
            ],
            "description": "Type: collection\n\nDescription: The deleted messages, mapped by their ID"
        }
    ],
    "code": function(cache){
        this.client.on( 'messageDeleteBulk' , (messages) => { 
            this.StoreOutputValue( messages , 'messages' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}