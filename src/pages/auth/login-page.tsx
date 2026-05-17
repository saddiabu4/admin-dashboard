import { ShieldCheck } from 'lucide-react'

import { LoginForm } from '@/features/auth/components/login-form'

import { Card, CardContent } from '@/shared/ui/card'

export function LoginPage() {
  return (
    <div className="bg-muted/40 flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md border-none shadow-xl">
        <CardContent className="space-y-6 p-8">
          <div className="space-y-2 text-center">
            <div className="bg-primary text-primary-foreground mx-auto flex size-14 items-center justify-center rounded-2xl">
              <ShieldCheck className="size-7" />
            </div>

            <h1 className="text-3xl font-bold">Welcome Back</h1>

            <p className="text-muted-foreground text-sm">
              Login to your admin dashboard
            </p>
          </div>

          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
