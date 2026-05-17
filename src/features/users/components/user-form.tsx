import { useMutation } from '@tanstack/react-query'

import { toast } from 'sonner'

import type { UserSchema } from '../schema'

export function useCreateUser() {
  const mutation = useMutation({
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

  return mutation
}
