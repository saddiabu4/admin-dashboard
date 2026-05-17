import { useMutation, useQueryClient } from '@tanstack/react-query'

import { toast } from 'sonner'

import type { UserSchema } from '../schema'

export function useCreateUser() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (values: UserSchema) => {
      await new Promise(resolve => setTimeout(resolve, 600))

      return values
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      })

      toast.success('User created successfully')
    },

    onError: () => {
      toast.error('Failed to create user')
    },
  })

  return mutation
}
