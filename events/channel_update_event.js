module.exports = {
    "name": "Channel Update [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When a channel is updated - e.g. name change, topic change, this event will trigger",
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
            "name": "oldchannel",
            "title": "old Channel",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The channel before the update"
        },
        {
            "name": "newchannel",
            "title": "new Channel",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The channel after the update"
        }
    ],
    "code": function(cache){
        this.client.on( 'channelUpdate' , (oldchannel, newchannel) => {
            this.StoreOutputValue( oldchannel , 'oldchannel' , cache); 
            this.StoreOutputValue( newchannel , 'newchannel' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}