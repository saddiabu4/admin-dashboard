import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import { Loader2 } from 'lucide-react'

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input type="email" placeholder="admin@test.com" {...field} />
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
              <FormLabel>Password</FormLabel>

              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="animate-spin" />
              Logging in...
            </>
          ) : (
            'Login'
          )}
        </Button>
      </form>
    </Form>
  )
}
