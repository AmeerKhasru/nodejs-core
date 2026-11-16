import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
const productController = (req: IncomingMessage, res: ServerResponse) => {

    const url = req.url;
    const method = req.method;

    const products = [
        {
            id : 1,
            name : "product-1",
            price : 20
        },
        {
            id : 2,
            name : "product-2",
            price : 30
        },
        {
            id : 3,
            name : "product-3",
            price : 40
        },
    ]

    productService();

    if (url === "/products" && method === "GET"){
        res.writeHead (200,{"Content-Type" :"text/plain" })
        res.end(JSON.stringify({
            message : "Products retrieved Successfully",
            data: products,
        }),
    );

    }


 

};
export default productController; 