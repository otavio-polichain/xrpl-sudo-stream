import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import { helloController } from "./controllers/helloController";
import walletRoutes from "./routes/walletRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(bodyParser.json());

app.get("/hello", helloController);
app.use('/wallet', walletRoutes);
app.use('/', userRoutes);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
