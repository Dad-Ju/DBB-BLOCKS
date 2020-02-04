module.exports = {
    "name": "Guild Unavailable [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Guild becomes unavailable, likely due to a server outage, this event will trigger",

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
            "name": "guild",
            "title": "Guild",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Guild that has become unavailable"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'guildUnavailable' , (guild) => { 
            this.StoreOutputValue( guild , 'guild' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}