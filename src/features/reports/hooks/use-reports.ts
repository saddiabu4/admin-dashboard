import type { Report } from '../types'

export function useReports() {
  return {
    data: [] as Report[],
    isLoading: false,
    error: null as string | null,
  }
}
