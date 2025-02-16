import { Router } from "express";
import UserRouter from "./user.route";
import ProductRouter from "./product.route";

const router = Router();

router.use("/users", UserRouter);
router.use("/products", ProductRouter);

export default router;
