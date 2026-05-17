import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import { Lock, Mail, User } from 'lucide-react'

import { useCreateUser } from '../hooks/use-create-user'

import { userSchema, type UserSchema } from '../schema'

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

type UserFormProps = {
  defaultValues?: UserSchema
}

export function UserForm({ defaultValues }: UserFormProps) {
  const mutation = useCreateUser()

  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),

    defaultValues: defaultValues ?? {
      firstName: '',

      lastName: '',

      email: '',

      password: '',

      roles: [],
    },
  })

  function onSubmit(values: UserSchema) {
    mutation.mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-sm font-semibold tracking-tight">
                First Name
              </FormLabel>

              <FormControl>
                <div className="group relative">
                  <User className="text-muted-foreground group-focus-within:text-primary absolute left-4.5 top-1/2 size-4 -translate-y-1/2 transition-colors duration-300" />

                  <Input placeholder="John" className="h-13 pl-12" {...field} />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-sm font-semibold tracking-tight">
                Last Name
              </FormLabel>

              <FormControl>
                <div className="group relative">
                  <User className="text-muted-foreground group-focus-within:text-primary absolute left-4.5 top-1/2 size-4 -translate-y-1/2 transition-colors duration-300" />

                  <Input placeholder="Doe" className="h-13 pl-12" {...field} />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-sm font-semibold tracking-tight">
                Email
              </FormLabel>

              <FormControl>
                <div className="group relative">
                  <Mail className="text-muted-foreground group-focus-within:text-primary absolute left-4.5 top-1/2 size-4 -translate-y-1/2 transition-colors duration-300" />

                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="h-13 pl-12"
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
            <FormItem className="space-y-3">
              <FormLabel className="text-sm font-semibold tracking-tight">
                Password
              </FormLabel>

              <FormControl>
                <div className="group relative">
                  <Lock className="text-muted-foreground group-focus-within:text-primary absolute left-4.5 top-1/2 size-4 -translate-y-1/2 transition-colors duration-300" />

                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="h-13 pl-12"
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
          className="h-12 w-full text-base font-semibold shadow-lg shadow-indigo-500/20"
        >
          <User className="size-4" />
          Save User
        </Button>
      </form>
    </Form>
  )
}
