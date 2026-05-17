import type { AppUser } from '@/shared/types/api'

export function useMe() {
  return {
    data: null as AppUser | null,
    isLoading: false,
  }
}
