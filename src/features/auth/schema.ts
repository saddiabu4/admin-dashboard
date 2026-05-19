import { z } from 'zod'

import i18next from '@/shared/i18n/i18n'

export const loginSchema = z.object({
  email: z.email(i18next.t('auth.errors.invalidEmail')),

  password: z.string().min(8, i18next.t('auth.errors.passwordLength')),
})

export type LoginSchema = z.infer<typeof loginSchema>
