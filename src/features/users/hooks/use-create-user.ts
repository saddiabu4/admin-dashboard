import { useMutation, useQueryClient } from '@tanstack/react-query'

import { toast } from 'sonner'

import { useTranslation } from 'react-i18next'

import type { UserSchema } from '../schema'

export function useCreateUser() {
  const queryClient = useQueryClient()

  const { t } = useTranslation()

  const mutation = useMutation({
    mutationFn: async (values: UserSchema) => {
      await new Promise(resolve => setTimeout(resolve, 600))

      return values
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      })

      toast.success(t('users.toast.created'))
    },

    onError: () => {
      toast.error(t('users.toast.createFailed'))
    },
  })

  return mutation
}
