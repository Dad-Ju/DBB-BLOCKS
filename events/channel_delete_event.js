module.exports = {
    "name": "Channel Delete [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Channel gets deleted, this event will trigger",

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
            "name": "channel",
            "title": "Channel",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Channel that was deleted"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'channelDelete' , (channel) => { 
            this.StoreOutputValue( channel , 'channel' , cache);
              this.RunNextBlock('action', cache); 
            });
        }
}