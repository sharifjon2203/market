import { Router } from "express";
import { orderController } from "../controllers/order.controller.js";


export const orderRouter = Router();

orderRouter
  .post("/", orderController.create)
  .get("/", orderController.findAll)
  .get("/:id", orderController.findOne)
  .put("/:id", orderController.update)
  .delete("/:id", orderController.delete);
