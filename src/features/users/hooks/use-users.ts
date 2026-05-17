import { useQuery } from '@tanstack/react-query'

import { users } from '@/mocks/data/users'

export function useUsers() {
  return useQuery({
    queryKey: ['users'],

    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 600))

      return users
    },
  })
}
