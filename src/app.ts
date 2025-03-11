import "reflect-metadata";
import express, { Application } from "express";
import router from "./routes";
import { AppDataSource } from "./config";
import dotenv from "dotenv";

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
