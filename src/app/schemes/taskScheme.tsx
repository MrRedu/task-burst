import { z } from 'zod'


export const taskScheme = z.object({
  title: z
    .string()
    .trim()
    .min(3, {
      message: 'Title must be at least 3 characters',
    })
    .max(64, {
      message: 'Title must be at most 64 characters',
    }),
  description: z
    .string()
    .trim()
    .optional()
    .refine(val => val === '' || val!.length >= 6, {
      message: 'Description must be at least 6 characters',
    })
    .refine(val => val === '' || val!.length <= 256, {
      message: 'Description must be at most 256 characters',
    }),
  startDateTime: z.string(),
  endDateTime: z.string(),
})
