var http = require('http');
const url = require('url');
const redis = require("redis");
const { appendFile } = require('fs');
const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});


employeeEmails = ["rard@ground.com","jcoots3@yahoo.com","lreyburn6@unicef.org","hcahna@addthis.com","khupkam@oracle.com"]
employeeDetails = { "rard@ground.com": { "name": "Rickert", "age": 35 }, 
"jcoots3@yahoo.com": { "name": "Jamie", "age": 27 }, 
"lreyburn6@unicef.org": { "name": "Lana", "age": 37 }, 
"hcahna@addthis.com": { "name": "Hedvig", "age": 32 }, 
"khupkam@oracle.com": { "name": "Kasper", "age": 29 } }

admincred = {
    user: "aditya",
    pass: "1234"
}

function getRouteFromUrl(url){
    console.log(url)
    return(url.split("/")[1].split("?")[0])
}

function getQuery(request){
    var url_parts = url.parse(request.url, true);
    request.query = url_parts.query;

}

callBackFunction = (req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'});  
    getQuery(req);
    switch(req.method){
        case "POST":
                switch(getRouteFromUrl(req.url)){
                    case "login":{
                        var requestData = ""
                        req.on('data', (data)=>{
                            requestData+=data;
                        })
                        req.on('end', ()=>{
                            let parsedReq = JSON.parse(requestData.toString()); 
                            console.log(parsedReq)
                            if( parsedReq.username == admincred.user && parsedReq.pass == admincred.pass){
                                res.end(JSON.stringify({success:true})) 
                            }else{
                                res.end(JSON.stringify({success:false}))
                            }
                        })
                        break;
                    }
                    default : {
                        console.log("default")
                        res.end("Sorry error!")
                        break;
                    }
                }
            break;

        case "GET":
            switch(getRouteFromUrl(req.url)){
                case "employee":{
                    const {email} = req.query;
                    var value =req.query;
                    console.log(value);
                    res.end(JSON.stringify({"employeeDetail":employeeDetails[email]}))
                    break;
                }
                case "view":{
                    res.end(JSON.stringify({"employeeDetail":employeeDetails}));
                    break;
                }
                default : {
                    console.log("default")
                    res.end("Sorrr error!!")
                    break
                }
            }   
        
    }
}



http.createServer(callBackFunction).listen(8080);

