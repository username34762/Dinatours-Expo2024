import {z } from "zod";
export const formSchema = z.object({
    placeName: z.string().min(2).max(50),
    tourDate: z.string().min(2).max(50),
    tourEndDate: z.string().min(2).max(50),
    ubication: z.string().min(2).max(50),
    photo: z.string().min(1).max(100),
    isPublish: z.boolean(),
  })