module.exports = {
    "name": "Role Update [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When a guild role is updated, this event will trigger",
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
            "name": "oldrole",
            "title": "old Role",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The role before the update"
        },
        {
            "name": "newrole",
            "title": "new Role",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The role after the update"
        }
    ],
    "code": function(cache){
        this.client.on( 'roleUpdate' , (oldrole, newrole) => { 
            this.StoreOutputValue( oldrole , 'oldrole' , cache); 
            this.StoreOutputValue( newrole , 'newrole' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}