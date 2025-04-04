import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.put("/", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.delete("/", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export { router as userRouter };
