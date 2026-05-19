import { LogOut } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { useAuthStore } from '@/features/auth/store'

import { routes } from '@/shared/constants/routes'

import { Avatar, AvatarFallback } from '@/shared/ui/avatar'

import { Button } from '@/shared/ui/button'

import { LanguageSwitcher } from '../language-switcher/language-switcher'

import { ThemeToggle } from '../theme-toggle/theme-toggle'

export function Header() {
  const navigate = useNavigate()

  const { t } = useTranslation()

  const user = useAuthStore(state => state.user)

  const logout = useAuthStore(state => state.logout)

  function handleLogout() {
    logout()

    navigate(routes.login)
  }

  return (
    <header className="bg-background flex h-16 items-center justify-between gap-3 border-b px-4 sm:px-6">
      <div className="min-w-0">
        <h1 className="text-base font-semibold sm:text-lg">
          {t('header.welcomeBack')}
        </h1>

        <p className="text-muted-foreground truncate text-xs sm:text-sm">
          {user?.firstName} {user?.lastName}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
        <Avatar>
          <AvatarFallback>
            {user?.firstName?.[0]}
            {user?.lastName?.[0]}
          </AvatarFallback>
        </Avatar>

        <Button
          variant="outline"
          size="icon"
          onClick={handleLogout}
          aria-label={t('header.logout')}
        >
          <LogOut className="size-4" />
        </Button>
      </div>
    </header>
  )
}
