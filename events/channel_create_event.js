module.exports = {
    "name": "Channel Create [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a Channel gets created, this event will trigger",

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
            "description": "Type: Object\n\nDescription: The Channel that was created",
            "types": [
                "object"
            ]
        }
    ],
    
    "code": function(cache){
        this.client.on( 'channelCreate' , (channel) => { 
            this.StoreOutputValue( channel , 'channel' , cache);
              this.RunNextBlock('action', cache); 
            });
        }
}