import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";



export const userRouter = Router();

userRouter.get("/profile", authMiddleware, userController.profile);
userRouter.put("/", userController.update);
userRouter.delete("/", userController.delete);


