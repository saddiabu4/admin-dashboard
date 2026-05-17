import type { PropsWithChildren } from 'react'

import { Navigate } from 'react-router-dom'

import { useAuthStore } from '@/features/auth/store'

import { routes } from '@/shared/constants/routes'

type ProtectedRouteProps = PropsWithChildren & {
  allowedRoles?: string[]
}

export function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to={routes.login} replace />
  }

  if (allowedRoles && allowedRoles.length > 0) {
    const hasAccess = user?.roles.some(role => allowedRoles.includes(role))

    if (!hasAccess) {
      return <Navigate to={routes.forbidden} replace />
    }
  }

  return children
}
