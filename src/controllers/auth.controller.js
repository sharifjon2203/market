import { status } from "http-status";

import { User } from "../models/index.js";

export const authController = {
  signUp: async (req, res, next) => {
    try {
      const body = req.body;
      const user = await User.findOne(
        { email: body.email },
        "email _id",
      ).exec();

      console.log(user);
      if (!user) {
        const newUser = new User(body);

        await newUser.save();
        res.send(newUser);
      }

      res.send("User already exists!;");
      return;
    } catch (err) {
      next(err);
    }
  },
  signIn: (req, res, next) => {
    try {
      //
    } catch (err) {
      next(err);
    }
  },
};
