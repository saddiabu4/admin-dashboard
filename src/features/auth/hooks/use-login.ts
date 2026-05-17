import { useMutation } from '@tanstack/react-query'

import { toast } from 'sonner'

import { login } from '../api'

import { useAuthStore } from '../store'

export function useLogin() {
  const setAuth = useAuthStore(state => state.setAuth)

  return useMutation({
    mutationFn: login,

    onSuccess: data => {
      setAuth(data.token, data.user)

      toast.success('Successfully logged in')
    },

    onError: error => {
      toast.error(error.message)
    },
  })
}
