import { useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import { Loader2, Lock, Mail } from 'lucide-react'

import { useLogin } from '../hooks/use-login'

import { loginSchema, type LoginSchema } from '../schema'

import { routes } from '@/shared/constants/routes'

import { Button } from '@/shared/ui/button'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form'

import { Input } from '@/shared/ui/input'

export function LoginForm() {
  const navigate = useNavigate()

  const { t } = useTranslation()

  const { mutate, isPending } = useLogin()

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: '',

      password: '',
    },
  })

  function onSubmit(values: LoginSchema) {
    mutate(values, {
      onSuccess: () => {
        navigate(routes.dashboard)
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-200">Email</FormLabel>
              <FormLabel className="text-slate-200">
                {t('auth.login.emailLabel')}
              </FormLabel>

              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                  <Input
                    type="email"
                    placeholder={t('auth.login.emailPlaceholder')}
                    className="h-12 rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-slate-400 focus-visible:ring-indigo-500"
                    {...field}
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-200">Password</FormLabel>
              <FormLabel className="text-slate-200">
                {t('auth.login.passwordLabel')}
              </FormLabel>

              <FormControl>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                  <Input
                    type="password"
                    placeholder={t('auth.login.passwordPlaceholder')}
                    className="h-12 rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-slate-400 focus-visible:ring-indigo-500"
                    {...field}
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-indigo-500 text-base font-semibold text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              {t('auth.login.loading')}
            </>
          ) : (
            t('auth.login.button')
          )}
        </Button>
      </form>
    </Form>
  )
}
