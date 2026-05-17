import type { ReactNode } from 'react'

import { LoginPage } from '@/pages/auth/login-page'
import { DashboardPage } from '@/pages/dashboard/dashboard-page'
import { ForbiddenPage } from '@/pages/forbidden/forbidden-page'
import { PaymentsPage } from '@/pages/payments/payments-page'
import { ReportsPage } from '@/pages/reports/reports-page'
import { UsersPage } from '@/pages/users/users-page'
import { DashboardLayout } from '@/widgets/layout/dashboard-layout'
import { Navigate } from 'react-router-dom'

export type AppRoute = {
  path: string

  element: ReactNode

  isProtected?: boolean

  allowedRoles?: string[]
}

export const routeConfig: AppRoute[] = [
  {
    path: '/',

    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/dashboard',

    element: (
      <DashboardLayout>
        <DashboardPage />
      </DashboardLayout>
    ),

    isProtected: true,
  },

  {
    path: '/users',

    element: (
      <DashboardLayout>
        <UsersPage />
      </DashboardLayout>
    ),

    isProtected: true,

    allowedRoles: ['ADMIN'],
  },

  {
    path: '/payments',

    element: (
      <DashboardLayout>
        <PaymentsPage />
      </DashboardLayout>
    ),

    isProtected: true,

    allowedRoles: ['PAYMENT', 'ADMIN'],
  },

  {
    path: '/reports',

    element: (
      <DashboardLayout>
        <ReportsPage />
      </DashboardLayout>
    ),

    isProtected: true,

    allowedRoles: ['REPORTS', 'ADMIN'],
  },

  {
    path: '/403',
    element: <ForbiddenPage />,
  },
]
