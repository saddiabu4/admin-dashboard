import { ShieldCheck } from 'lucide-react'

import { useTranslation } from 'react-i18next'

import { LoginForm } from '@/features/auth/components/login-form'

import { Card, CardContent } from '@/shared/ui/card'

export function LoginPage() {
  const { t } = useTranslation()

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4">
      <div className="absolute inset-0">
        <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <Card className="relative z-10 w-full max-w-md border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl dark:bg-white/5">
        <CardContent className="space-y-8 p-8">
          <div className="space-y-4 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/30">
              <ShieldCheck className="size-8" />
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white">
                {t('auth.login.title')}
              </h1>

              <p className="mt-3 text-sm text-slate-300">
                {t('auth.login.subtitle')}
              </p>
            </div>
          </div>

          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
