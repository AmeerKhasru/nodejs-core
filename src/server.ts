import {createServer, IncomingMessage, Server, ServerResponse} from "http";

const server : Server = createServer((req : IncomingMessage,
    res : ServerResponse)=>{

    // console.log("Request : ",req);
    // console.log("Response : ",res);
    // console.log(req.url);
    // console.log(req.method);

    const url = req.url; //  etar maddome /products, /home, etc pete pari
    const method = req.method; // etar maddome GET pabo

    if(url==="/" && method==="GET"){
        // console.log("This is root route");
        res.writeHead (200,{"Content-Type" :"text/plain" })
        res.end("This is root Route")
    }

    else if(url==="/products" && method==="GET"){
         res.writeHead (200,{"Content-Type" :"text/plain" })
        res.end("This is products Route")
    }
    else if(url==="/sports-item" && method==="GET"){
         res.writeHead (200,{"Content-Type" :"text/plain" })
        res.end("This is Sports Item Route")
    }

    
    else{
        console.log("This route is not defined");
    }

})

server.listen(5000, ()=>{

    console.log("Server is Running succesfully");
})