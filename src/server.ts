import {createServer, IncomingMessage, Server, ServerResponse} from "http";

const server : Server = createServer((req : IncomingMessage,
    res : ServerResponse)=>{

    // console.log("Request : ",req);
    // console.log("Response : ",res);
    // console.log(req.url);
    // console.log(req.method);

    const url = req.url;
    const method = req.method;

    if(url==="/" && method==="GET"){
        console.log("This is root route");
    }
    else{
        console.log("This route is not defined");
    }

})

server.listen(5000, ()=>{

    console.log("Server is Running succesfully");
})