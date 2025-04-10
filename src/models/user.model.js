import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: {
      type: String,
      trim: true,
      lower: true,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lower: true,
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      lower: true,
    },
    phone_number: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("user", userSchema);
