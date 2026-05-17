import { useQuery } from '@tanstack/react-query'

import { payments } from '@/mocks/data/payments'

export function usePayments() {
  return useQuery({
    queryKey: ['payments'],

    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 600))

      return payments
    },
  })
}
