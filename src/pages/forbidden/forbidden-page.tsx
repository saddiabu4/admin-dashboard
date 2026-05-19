import { useTranslation } from 'react-i18next'

export function ForbiddenPage() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen items-center justify-center">
      {t('pages.forbidden.title')}
    </div>
  )
}
