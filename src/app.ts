import "module-alias/register";
import "reflect-metadata";
import express, { Application } from "express";
import router from "./routes";
import { AppDataSource } from "./config";
import dotenv from "dotenv";

declare global {
  namespace Express {
    interface Request {
      user?: { id: number; email: string }; // Add the `user` property to the `Request` type
    }
  }
}

const app: Application = express();
app.use(express.json());

dotenv.config();

app.use("/api", router);

app.listen(5001, async () => {
  await AppDataSource.initialize().then(() => {
    console.log("Database connnected");
  });
  console.log("Server started on http://localhost:5001");
});
