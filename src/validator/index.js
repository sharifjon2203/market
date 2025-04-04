import { z } from "zod";

// creating a schema for strings
export const userSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(4),
});
