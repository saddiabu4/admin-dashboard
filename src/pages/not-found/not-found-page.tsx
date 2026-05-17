import { Link } from 'react-router-dom'

import { TriangleAlert } from 'lucide-react'

import { routes } from '@/shared/constants/routes'

import { Button } from '@/shared/ui/button'

export function NotFoundPage() {
  return (
    <div className="bg-muted/30 flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="bg-primary/10 mb-6 flex size-20 items-center justify-center rounded-3xl">
        <TriangleAlert className="text-primary size-10" />
      </div>

      <h1 className="text-6xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>

      <p className="text-muted-foreground mt-3 max-w-md">
        The page you are looking for does not exist or may have been moved.
      </p>

      <Button asChild className="mt-8">
        <Link to={routes.dashboard}>Go back dashboard</Link>
      </Button>
    </div>
  )
}
