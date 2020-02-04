module.exports = {
    "name": "User Update [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a User's details (e.g. Username) are changed, this event will trigger",

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
            "name": "olduser",
            "title": "old User",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The User before the update"
        },
        {
            "name": "newuser",
            "title": "new User",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The User after the update"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'userUpdate' , (olduser, newuser) => { 
            this.StoreOutputValue( olduser , 'olduser' , cache); 
            this.StoreOutputValue( newuser , 'newuser' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}