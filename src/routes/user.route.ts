import { Router } from "express";
import {
  createUserHandler,
  deleteUserHandler,
  getUsersHandler,
  updateUserHandler,
} from "../controllers/user.controller";
import { validateBody } from "../middlewares";
import { CreateUser } from "../validations/user.validation";

const router = Router();

router.get("/", getUsersHandler);
router.post("/", validateBody(CreateUser), createUserHandler);
router.patch("/:id", updateUserHandler);
router.delete("/:id", deleteUserHandler);

export default router;
