import type { Payment } from '../types'

export function usePayments() {
  return {
    data: [] as Payment[],
    isLoading: false,
    error: null as string | null,
  }
}
