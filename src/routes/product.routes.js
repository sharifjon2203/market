import { Router } from "express";
import { productController } from "../controllers/product.controller.js";
export const productRouter = Router();

productRouter
  .post("/", productController.create)
  .get("/", productController.findAll)
  .get("/:id", productController.findOne)
  .put("/:id", productController.update)
  .delete("/:id", productController.delete);
