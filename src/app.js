import express from "express";
import morgan from "morgan";

import { User } from "./models/index.js";
import {
  customMiddelware,
  newMiddeleware,
} from "./middlewares/custom.middleware.js";
import { roleGuard } from "./middlewares/guard.middleware.js";
import { appRouter } from "./routes/index.js";
// import { authMiddleware } from "../middlewares/auth.middleware.js";
import { authMiddleware } from "../src/middlewares/auth.middleware.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use("/api/v1", authMiddleware, appRouter);
//role = user, moderator, guest, admin, superadmin

// app.use(
//   "/",
//   // roleGuard("user", "admin", "superadmin"),
//   newMiddeleware,
//   customMiddelware,
//   // customController.findAll,
// );

app.use((req, res) => {
  res.status(500).json({ message: "Internal server error !!!" })
})
// app.use(ErrorMiddleware);

export default app;
