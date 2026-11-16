import fs, { readFileSync } from "fs"
import path from "node:path";


export const productService = () => {

    const filePath = path.join(process.cwd(), "./src/database/db.json");
    // console.log(process.cwd());

    // console.log(filePath);

    const result = fs.readFileSync(filePath,"utf-8");

    // console.log(result);

    return JSON.parse(result);
    
}