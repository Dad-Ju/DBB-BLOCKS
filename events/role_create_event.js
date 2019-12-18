module.exports = {
    "name": "Role Create [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When a role is created, this event will trigger",
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
            "description": "Type: Object\n\nDescription: The role that was created"
        }
    ],
    "code": function(cache){
        this.client.on( 'roleCreate' , (role) => { 
            this.StoreOutputValue( role , 'role' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}