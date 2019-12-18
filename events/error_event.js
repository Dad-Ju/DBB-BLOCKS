module.exports = {
    "name": "Error [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When the client's WebSocket encounters a connection error, this event will trigger",
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
            "name": "error",
            "title": "Error",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The encountered Error"
        }
    ],
    "code": function(cache){
        this.client.on( 'error' , (error) => { 
            this.StoreOutputValue( error , 'error' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}