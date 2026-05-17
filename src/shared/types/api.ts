export type AppUser = {
  id: string
  name: string
  email?: string
}

export type ApiError = {
  message: string
  code?: string
  status?: number
  details?: Record<string, string[]>
}

export type ApiResponse<TData> = {
  data: TData
  message?: string
}

export type PaginatedResponse<TData> = {
  data: TData[]
  meta: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}
