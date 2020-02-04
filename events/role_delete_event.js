module.exports = {
    "name": "Role Delete [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Guild Role is deleted, this event will trigger",

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
            "name": "role",
            "title": "Role",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Role that was deleted"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'roleDelete' , (role) => { 
            this.StoreOutputValue( role , 'role' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}