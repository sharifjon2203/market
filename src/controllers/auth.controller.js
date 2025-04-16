import { status } from "http-status";

import { User } from "../models/index.js";
import { loginUser } from "../service/login.service.js";
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

      res.status(409).json({
        "message": "User already exists!"
      });
      return;
    } catch (err) {
      next(err);
    }
  },

  signIn: async (req, res, next) => {
    try {
      let user = await loginUser(req.body.email, req.body.password)
      if (user) {
        res.status(201).send({
          message: "Login success...",
          full_name: user.full_name,
        });
      }


    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "Login or password incorrect!",

      });
    }
  },



};
