import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
import type { IProduct } from "../types/product";
import { bodyParser } from "../utils/parseBody";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    const urlParams = url?.split("/");
    const id = urlParams && urlParams[1] === "products" && urlParams[2] ? Number(urlParams[2]) : null;

    // ১. সব প্রোডাক্ট লোড করা (GET /products)
    if (url === "/products" && method === "GET") {
        const products = productService();
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            message: "Products Loaded Successfully",
            data: products,
        }));
    }

    // ২. নির্দিষ্ট আইডি দিয়ে একটি প্রোডাক্ট লোড করা (GET /products/:id)
    else if (method === "GET" && id !== null) {
        const products = productService();
        const product = products.find((p: IProduct) => p.id === id);

        if (!product) {
            res.writeHead(404, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ message: "Product Not Found" }));
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            message: "Product Loaded Successfully",
            data: product,
        }));
    }

    // ৩. নতুন প্রোডাক্ট তৈরি করা (POST /products)
    else if (url === "/products" && method === "POST") {
        const body = await bodyParser(req);
        console.log("Received Body:", body);
        // এখানে আপনার সার্ভিসের মাধ্যমে নতুন প্রোডাক্ট সেভ করার লজিক বসাতে পারেন
        // যেমন: const newProduct = createProductService(body);

        res.writeHead(201, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            message: "Product Created Successfully",
            data: body, // আপাতত রিসিভ করা ডেটাই ফেরত পাঠানো হলো
        }));
    }
};

export default productController;