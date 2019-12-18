module.exports = {
    "name": "Channel Pins Update [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When the pins of a channel are updated, this event will trigger",
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
            "description": "Type: Object\n\nDescription: The channel where the Pin got Updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself"
        },
        {
            "name": "time",
            "title": "Time",
            "types": [
                "date"
            ],
            "description": "Type: Date\n\nDescription: The time when the last pinned message was pinned"
        }
    ],
    "code": function(cache){
        this.client.on( 'channelPinsUpdate' , (channel, time) => {
            this.StoreOutputValue( channel , 'channel' , cache);
            this.StoreOutputValue( time , 'time' , cache);
            this.RunNextBlock('action', cache); 
        });
    }
}