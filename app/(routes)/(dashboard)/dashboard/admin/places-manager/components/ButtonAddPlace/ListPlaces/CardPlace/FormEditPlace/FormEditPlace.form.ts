import {z } from "zod";
export const formSchema = z.object({
    name: z.string().min(2).max(50),
    description: z.string().min(2).max(50),
    ubication: z.string().min(2).max(50),
    rating: z.string().min(2).max(50),
    photo: z.string().min(1).max(100),
    isPublish: z.boolean(),
  })