import { Link } from 'react-router-dom'

import { TriangleAlert } from 'lucide-react'

import { useTranslation } from 'react-i18next'

import { routes } from '@/shared/constants/routes'

import { Button } from '@/shared/ui/button'

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-muted/30 flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="bg-primary/10 mb-6 flex size-20 items-center justify-center rounded-3xl">
        <TriangleAlert className="text-primary size-10" />
      </div>

      <h1 className="text-6xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">
        {t('pages.notFound.title')}
      </h2>

      <p className="text-muted-foreground mt-3 max-w-md">
        {t('pages.notFound.description')}
      </p>

      <Button asChild className="mt-8">
        <Link to={routes.dashboard}>{t('pages.notFound.action')}</Link>
      </Button>
    </div>
  )
}
