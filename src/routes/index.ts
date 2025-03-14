import { Router } from "express";
import UserRouter from "./user.route";
import AuthRouter from "./auth.route";
import ProfileRouter from "./profile.route";
import { CheckAuth } from "../middlewares/auth.midleware";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/user", CheckAuth, UserRouter);
router.use("/profile", CheckAuth, ProfileRouter);

export default router;
