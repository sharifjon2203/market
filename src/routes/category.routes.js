import { Router } from "express";

export const categoryRouter = Router();

categoryRouter
  .post("/", categoryController.create)
  .get("/", categoryController.findAll)
  .get("/:id", categoryController.findOne)
  .put("/:id", categoryController.update)
  .delete("/:id", categoryController.delete);
