import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controller/product.controller";
import sportsItemController from "../controller/sportsItem.controller";

const routeHandler = (req : IncomingMessage, res :
     ServerResponse) => {
        
    const url = req.url; //  etar maddome /products, /home, etc pete pari
    const method = req.method; // etar maddome GET pabo

    if(url==="/" && method==="GET"){
        // console.log("This is root route");
        res.writeHead (200,{"Content-Type" :"text/plain" })
         res.end(JSON.stringify({message : "This is Root route"}));
       
    }

    else if(url==="/products" && method==="GET"){
         

         productController(req,res);
    }
    else if(url==="/sports-item" && method==="GET"){
        
        sportsItemController(req,res);
    }

    
    else{
        // console.log("404! not Found!!");
         res.writeHead (404,{"Content-Type" :"text/plain" })
         res.end(JSON.stringify({message : "404! Not Found!"}));
    }
     };

export default routeHandler;