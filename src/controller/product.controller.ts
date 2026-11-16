import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
const productController = (req: IncomingMessage, res: ServerResponse) => {

    const url = req.url;
    const method = req.method;

    const products = productService();

    if (url === "/products" && method === "GET"){
        res.writeHead (200,{"Content-Type" :"text/plain" })
        res.end(JSON.stringify({
            message : "Products Loaded Successfully",
            data: products,
        }),
    );

    }


 

};
export default productController; 