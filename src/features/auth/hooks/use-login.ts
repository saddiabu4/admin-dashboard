import { useMutation } from '@tanstack/react-query'

import { useNavigate } from 'react-router-dom'

import { toast } from 'sonner'

import { login } from '../api'

import { useAuthStore } from '../store'

export function useLogin() {
  const navigate = useNavigate()

  const setAuth = useAuthStore(state => state.setAuth)

  return useMutation({
    mutationFn: login,

    onSuccess: data => {
      setAuth(data.token, data.user)

      if (!data.user.roles.length) {
        navigate('/403')

        return
      }

      navigate('/dashboard')

      toast.success('Successfully logged in')
    },

    onError: error => {
      toast.error(error.message)
    },
  })
}
