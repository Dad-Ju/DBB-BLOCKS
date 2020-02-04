module.exports = {
    "name": "Presence Update [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Guild Member's presence changes, or they change one of their details, this event will trigger",

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
            "name": "oldmember",
            "title": "old Member",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Member before the presence update"
        },
        {
            "name": "newmember",
            "title": "new Member",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Member after the presence update"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'presenceUpdate' , (oldmember, newmember) => { 
            this.StoreOutputValue( oldmember , 'oldmember' , cache); 
            this.StoreOutputValue( newmember , 'newmember' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}