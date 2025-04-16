
import { User } from "../models/index.js";

export const loginUser = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch = user.password === password;
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    return user;
  } catch (error) {
    console.error("Login failed:", error.message);
    throw error;
  }
};

