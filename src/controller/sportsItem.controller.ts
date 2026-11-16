import type { IncomingMessage, ServerResponse } from "http";

const sportsItemController = (req: IncomingMessage, res: ServerResponse) => {
 res.writeHead (200,{"Content-Type" :"text/plain" })
 res.end(JSON.stringify({message : "This is Sports Item route"}));

};
export default sportsItemController;