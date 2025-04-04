import { userSchema } from "../validator/index.js";

export const validationMiddlweare = (req, res, next) => {
  try {
    userSchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
