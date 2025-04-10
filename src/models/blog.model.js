import mongoose from "mongoose";
import {
  blogCollectionName,
  userCollectionName,
} from "../common/constants/db.js";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: userCollectionName,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.model(blogCollectionName, blogSchema);
