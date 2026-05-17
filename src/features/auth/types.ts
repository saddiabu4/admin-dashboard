export type UserRole = 'ADMIN' | 'PAYMENT' | 'REPORTS'

export type User = {
  id: string

  firstName: string

  lastName: string

  email: string

  roles: readonly UserRole[]
}

export type LoginPayload = {
  email: string

  password: string
}

export type LoginResponse = {
  token: string

  user: User
}
