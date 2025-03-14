import { Router } from "express";
import { profileHandler } from "../controllers/profile.controller";

const router = Router();

router.get("/", profileHandler);

export default router;
