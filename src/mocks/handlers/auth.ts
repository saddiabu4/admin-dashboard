import { delay, http, HttpResponse } from 'msw'

export const authHandlers = [
  http.post('/api/auth/login', async () => {
    await delay(600)

    return HttpResponse.json({
      token: 'mock-token',

      user: {
        id: '1',

        firstName: 'Admin',

        lastName: 'User',

        email: 'admin@test.com',

        roles: ['ADMIN'],
      },
    })
  }),
]
