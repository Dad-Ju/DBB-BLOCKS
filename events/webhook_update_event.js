module.exports = {
    "name": "Webhook Update [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When a guild text channel has its webhooks changed, this event will trigger",
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
            "description": "Type: Object\n\nDescription: The channel that had a webhook update"
        }
    ],
    "code": function(cache){
        this.client.on( 'webhookUpdate' , (channel) => { 
            this.StoreOutputValue( channel , 'channel' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}