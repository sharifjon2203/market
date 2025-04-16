import { Router } from "express";
import { authRouter } from "./auth.routes.js";
import { userRouter } from "./user.routes.js";
import { categoryRouter } from "./category.routes.js"
import { productRouter } from "./product.routes.js"
import { orderRouter } from "./order.routes.js";


export const appRouter = Router();

appRouter.use("/auth", authRouter);
appRouter.use("/user", userRouter);
appRouter.use("/category", categoryRouter);
appRouter.use("/product", productRouter);
appRouter.use("/order", orderRouter);

// appRouter.use(userRouter);
// appRouter.use(categoryRouter);
