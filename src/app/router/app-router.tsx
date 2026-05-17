import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ProtectedRoute } from './protected-route'
import { routeConfig } from './route-config'

const router = createBrowserRouter(
  routeConfig.map(route => ({
    path: route.path,

    element: route.isProtected ? (
      <ProtectedRoute allowedRoles={route.allowedRoles}>
        {route.element}
      </ProtectedRoute>
    ) : (
      route.element
    ),
  })),
)

export function AppRouter() {
  return <RouterProvider router={router} />
}
