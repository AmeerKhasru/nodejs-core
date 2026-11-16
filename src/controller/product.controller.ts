import type { IncomingMessage, ServerResponse } from "http";
const productController = (req: IncomingMessage, res: ServerResponse) => {
 res.writeHead (200,{"Content-Type" :"text/plain" })
 res.end(JSON.stringify({message : "This is Product route"}));

};
export default productController; 