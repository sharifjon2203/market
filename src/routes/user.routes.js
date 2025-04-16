import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
export const userRouter = Router();

userRouter.get("/profile", userController.profile);
userRouter.put("/", userController.update);
userRouter.delete("/", userController.delete);


