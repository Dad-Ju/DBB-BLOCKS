module.exports = {
    "name": "Guild Member Speaking [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Guild Member starts/stops speaking, this event will trigger",

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
            "name": "member",
            "title": "Member",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Member that started/stopped speaking"
        },
        {
            "name": "speaking",
            "title": "Speaking",
            "types": [
                "boolean"
            ],
            "description": "Type: boolean\n\nDescription: Whether or not the Member is speaking"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'guildMemberSpeaking' , (member, speaking) => { 
            this.StoreOutputValue( member , 'member' , cache); 
            this.StoreOutputValue( speaking , 'speaking' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}