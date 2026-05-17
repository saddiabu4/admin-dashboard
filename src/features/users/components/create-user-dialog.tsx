import { useMutation } from '@tanstack/react-query'

import { UserPlus } from 'lucide-react'

import { toast } from 'sonner'

import type { UserSchema } from '../schema'

import { UserForm } from './user-form'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'

import { Button } from '@/shared/ui/button'

export function CreateUserDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="mr-2 size-4" />
          Create User
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
        </DialogHeader>

        <UserForm />
      </DialogContent>
    </Dialog>
  )
}

export function useCreateUser() {
  return useMutation({
    mutationFn: async (values: UserSchema) => {
      await new Promise(resolve => setTimeout(resolve, 600))

      return values
    },

    onSuccess: () => {
      toast.success('User created successfully')
    },

    onError: () => {
      toast.error('Failed to create user')
    },
  })
}
