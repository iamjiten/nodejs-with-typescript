import express, { Application } from "express";
import router from "./routes";

const app: Application = express();
app.use(express.json());

app.use("/api", router);

app.listen(5001, () => {
  console.log("Server started on http://localhost:5001");
});
