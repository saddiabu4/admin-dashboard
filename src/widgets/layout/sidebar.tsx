import { NavLink } from 'react-router-dom'

import { useAuthStore } from '@/features/auth/store'

import { cn } from '@/shared/lib/utils'

import { navigation } from './navigation'

export function Sidebar() {
  const user = useAuthStore(state => state.user)

  const filteredNavigation = navigation.filter(item => {
    if (!item.roles) {
      return true
    }

    return item.roles.some(role => user?.roles.includes(role))
  })

  return (
    <aside className="bg-background hidden w-64 border-r lg:flex lg:flex-col">
      <div className="border-b px-6 py-5">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {filteredNavigation.map(item => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'hover:bg-muted flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors',

                  isActive &&
                    'bg-primary text-primary-foreground hover:bg-primary',
                )
              }
            >
              <Icon className="size-5" />

              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
