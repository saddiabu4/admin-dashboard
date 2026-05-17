import { z } from 'zod'

export const userSchema = z.object({
  firstName: z.string().min(2).max(50),

  lastName: z.string().min(2).max(50),

  email: z.email(),

  password: z.string().min(8),

  roles: z.array(z.string()).min(1),
})

export type UserSchema = z.infer<typeof userSchema>
