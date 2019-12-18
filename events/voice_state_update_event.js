module.exports = {
    "name": "Voice State Update [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes, this event will trigger",
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
            "description": "Type: Object\n\nDescription: The member before the voice state update"
        },
        {
            "name": "newmember",
            "title": "new Member",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The member after the voice state update"
        }
    ],
    "code": function(cache){
        this.client.on( 'voiceStateUpdate' , (oldmember, newmember) => { 
            this.StoreOutputValue( oldmember , 'oldmember' , cache); 
            this.StoreOutputValue( newmember , 'newmember' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}