import { Router } from "express";
import { loginHandler } from "../controllers/auth.controller";
import { validateBody } from "../middlewares";
import { LoginUser } from "../validations/auth.validation";

const router = Router();

router.post("/", validateBody(LoginUser), loginHandler);

export default router;
