import { LogOut } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

import { useAuthStore } from '@/features/auth/store'

import { routes } from '@/shared/constants/routes'

import { Avatar, AvatarFallback } from '@/shared/ui/avatar'

import { Button } from '@/shared/ui/button'

export function Header() {
  const navigate = useNavigate()

  const user = useAuthStore(state => state.user)

  const logout = useAuthStore(state => state.logout)

  function handleLogout() {
    logout()

    navigate(routes.login)
  }

  return (
    <header className="bg-background flex h-16 items-center justify-between border-b px-6">
      <div>
        <h1 className="text-lg font-semibold">Welcome back</h1>

        <p className="text-muted-foreground text-sm">
          {user?.firstName} {user?.lastName}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>
            {user?.firstName?.[0]}
            {user?.lastName?.[0]}
          </AvatarFallback>
        </Avatar>

        <Button variant="outline" size="icon" onClick={handleLogout}>
          <LogOut className="size-4" />
        </Button>
      </div>
    </header>
  )
}
