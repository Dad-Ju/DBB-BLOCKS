module.exports = {
    "name": "Rate Limit [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When the Client hits a rate limit while making a request (Discord blocks a Request from the Bot), this event will trigger",

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
            "name": "ratelimitinfo",
            "title": "Rate Limit Info",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: Object containing the rate limit info\n .limit : Number of requests that can be made to this endpoint\n .timeDifference : Delta-T in ms between your system and Discord servers\n .path : Path used for request that triggered this event\n .method : HTTP method used for request that triggered this event"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'rateLimit' , (ratelimitinfo) => { 
            this.StoreOutputValue( ratelimitinfo , 'ratelimitinfo' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}