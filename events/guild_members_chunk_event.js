module.exports = {
    "name": "Guild Members Chunk [Event]",
    "author": "Dad_Ju aka Ju#2402",
    "description": "When  a chunk of guild members is received (all members come from the same guild), this event will trigger",
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
            "name": "members",
            "title": "Members",
            "types": [
                "list"
            ],
            "description": "Type: list\n\nDescription: A List of Member Objects"
        },
        {
            "name": "guild",
            "title": "Guild",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The guild related to the member chunk"
        }
    ],
    "code": function(cache){
        this.client.on( 'guildMembersChunk' , (members, guild) => { 
            this.StoreOutputValue( members , 'members' , cache); 
            this.StoreOutputValue( guild , 'guild' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}