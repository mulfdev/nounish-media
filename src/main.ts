import { createServer } from "./server/server.js";

const app = createServer();

console.log("server running on 3k");
app.listen(3000);