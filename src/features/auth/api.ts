import type { LoginPayload, LoginResponse } from './types'

const mockUsers = [
  {
    id: '1',

    firstName: 'Admin',

    lastName: 'User',

    email: 'admin@test.com',

    password: 'Admin@123',

    roles: ['ADMIN', 'PAYMENT', 'REPORTS'] as const,
  },

  {
    id: '2',

    firstName: 'Payment',

    lastName: 'User',

    email: 'payment@test.com',

    password: 'Payment@1',

    roles: ['PAYMENT'] as const,
  },

  {
    id: '3',

    firstName: 'Reports',

    lastName: 'User',

    email: 'reports@test.com',

    password: 'Reports@1',

    roles: ['REPORTS'] as const,
  },
  {
    id: '4',

    firstName: 'Simple',

    lastName: 'User',

    email: 'user@test.com',

    password: 'User@1234',

    roles: [],
  },
]

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  await new Promise(resolve => setTimeout(resolve, 600))

  const user = mockUsers.find(
    item => item.email === payload.email && item.password === payload.password,
  )

  if (!user) {
    throw new Error('Invalid email or password')
  }

  return {
    token: 'mock-jwt-token',

    user: {
      id: user.id,

      firstName: user.firstName,

      lastName: user.lastName,

      email: user.email,

      roles: user.roles,
    },
  }
}
