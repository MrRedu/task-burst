import { z } from 'zod'

export const taskScheme = z
  .object({
    title: z
      .string()
      .trim()
      .min(3, { message: 'Title must be at least 3 characters' })
      .max(64, { message: 'Title must be at most 64 characters' }),
    description: z
      .string()
      .trim()
      .optional()
      .refine(value => value === '' || value!.length >= 6, {
        message: 'Description must be at least 6 characters',
      })
      .refine(value => value === '' || value!.length <= 256, {
        message: 'Description must be at most 256 characters',
      }),

    startDateTime: z
      .string()
      .refine(value => !Number.isNaN(Date.parse(value)), {
        message: 'Start date must be a valid date',
      }),

    endDateTime: z.string().refine(value => !Number.isNaN(Date.parse(value)), {
      message: 'End date must be a valid date',
    }),
  })
  .superRefine((data, context) => {
    const startDate = new Date(data.startDateTime)
    const endDate = new Date(data.endDateTime)

    if (endDate < startDate) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'End date cannot be earlier than start date',
        path: ['endDateTime'],
      })
    }
  })
