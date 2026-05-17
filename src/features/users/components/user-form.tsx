import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>

              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>

              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
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
                <Input type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Save User
        </Button>
      </form>
    </Form>
  )
}
