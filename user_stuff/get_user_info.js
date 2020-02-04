module.exports = {
    name: "Get User Info",

    author: "GOLD - modifyed by Dad_Ju"

    description: "Get User information.",

    category: "User Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "user",
            "title": "User",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The User you want to get information.",
            "types": ["object", "unspecified"]
        }
    ],

    options: [
        {
            "name": "info",
            "title": "User Info",
            "description": "Description: User information you want to get.",
            "type": "SELECT",
            "options": {
                1: "User Avatar ID [Text]",
                2: "User Avatar URL [Text]",
                3: "Is User A Bot? [Boolean]",
                4: "User Created At [Date]",
                5: "User Default Avatar URL [Text]",
                6: "User Discriminator [Text]",
                7: "User Display Avatar URL [Text]",
                8: "User DM Channel [DM Channel]",
                9: "User ID [Text]",
                10: "User Last Message [Message]",
                11: "User Last Message ID [Text]",
                12: "User Presence [Presence]",
                13: "User Tag [Text]",
                14: "User Username [Text]",
                15: "User Status [Text]"
            }
        }
    ],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        },
        {
            "name": "result",
            "title": "Result",
            "description": "Type: Unspecified\n\nDescription: Result you got with the User.",
            "types": ["unspecified"]
        }
    ],

    code: function(cache) {
        const user = this.GetInputValue("user", cache);
        const info = parseInt(this.GetOptionValue("info", cache));

        let result;
        switch(info) {
            case 1:
                result = user.avatar;
                break;
            case 2:
                result = user.avatarURL;
                break;
            case 3:
                result = user.bot;
                break;
            case 4:
                result = user.createdAt;
                break;
            case 5:
                result = user.defaultAvatarURL;
                break;
            case 6:
                result = user.discriminator;
                break;
            case 7:
                result = user.displayAvatarURL;
                break;
            case 8:
                result = user.dmChannel;
                break;
            case 9:
                result = user.id;
                break;
            case 10:
                result = user.lastMessage;
                break;
            case 11:
                result = user.lastMessageID;
                break;
            case 12:
                result = user.presence;
                break;
            case 13:
                result = user.tag;
                break;
            case 14:
                result = user.username;
                break;
            case 15:
                result = user.presence.status;
        }

        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
};