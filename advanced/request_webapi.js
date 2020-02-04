module.exports = {
    name: "JSON from/to WebAPI",

    description: "Make Request to an WebAPI",

    category: "Advanced",

    auto_execute: true,

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "url",
            "title": "URL",
            "description": "Description: The URL to send request.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "header",
            "title": "HEAD",
            "description": "Description: The Header Object to add to the Request.\n(if you don't need it leave it empty)",
            "types": ["object", "unspecified"]
        },
        {
            "name": "postdata",
            "title": "Data Send if POST",
            "description": "Type: Object, Unspecified, Text\n\nDescription: The Object / Data for the Request to send.",
            "types": ["object", "unspecified", "text"]
        }
    ],

    options: [
        {
            "name": "type",
            "title": "Request Type",
            "description": "Description: The Request Methode.",
            "type": "SELECT",
            "options": {
                1: "GET",
                2: "POST",
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
            "name": "retdata",
            "title": "Return Data",
            "description": "Type: Object\n\nDescription: The Object / Data from the Request parsed as JSON-Object.",
            "types": ["object", "unspecified"]
        },
        {
            "name": "error",
            "title": "ERROR",
            "description": "Type: Action\n\nDescription: Executes blocks if an Error occur.",
            "types": ["action"]
        },
    ],

    code: async function(cache) {
       try {
            let axios = require("axios");
            let URI = this.GetInputValue("url", cache);
            let postdata = this.GetInputValue("postdata", cache);
            let type = this.GetOptionValue("type", cache);
            let head = this.GetInputValue("header", cache);
            let retdata;
            let reqmethode;
            switch(type){
                case 1: reqmethode = "get" break;
                case 2: reqmethode = "post" break;
            }
            let sendobj = {
                method: reqmethode,
                url: URI
            }
            if(reqmethode == "POST"){
                if(typeod postdata == "object"){
                    sendobj.data = postdata;
                }else{
                    throw new Error("postdata must an Object!");
                }
            }
            if(head){
                if(typeof head == "object"){
                    sendobj.headers = head;
                }else{
                    throw new Error("Header must be an Object!");
                }
            }
            let request = await axios(sendobj);
            var retdata = request.data;
            if(request.status != 200){
                throw new Error("Request Failed!!").requestdata = request;
            }
            this.StoreOutputValue(retdata, "retdata", cache);
        } catch (error) {
            console.log(error);
            this.RunNextBlock("error", cache);
       }
    }
};