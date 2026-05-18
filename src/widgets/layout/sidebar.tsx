import { Menu } from 'lucide-react'

import { NavLink } from 'react-router-dom'

import { useAuthStore } from '@/features/auth/store'

import { Button } from '@/shared/ui/button'

import { cn } from '@/shared/lib/utils'

import { Sheet, SheetContent, SheetTrigger } from '@/shared/ui/sheet'

import { navigation } from './navigation'

function SidebarContent() {
  const user = useAuthStore(state => state.user)

  const filteredNavigation = navigation.filter(item => {
    if (!item.roles) {
      return true
    }

    return item.roles.some(role => user?.roles.includes(role))
  })

  return (
    <nav className="flex flex-1 flex-col gap-2 p-4">
      {filteredNavigation.map(item => {
        const Icon = item.icon

        return (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-indigo-500/10',

                isActive &&
                  'bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20',
              )
            }
          >
            <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />

            {item.label}
          </NavLink>
        )
      })}
    </nav>
  )
}

function SidebarHeader() {
  return (
    <div className="border-border/50 flex h-16 items-center gap-3 border-b px-4 sm:gap-4 sm:px-6">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/30">
        A
      </div>

      <div>
        <h2 className="text-lg font-bold tracking-tight">Admin Panel</h2>
      </div>
    </div>
  )
}

export function Sidebar() {
  return (
    <>
      <aside className="bg-background/80 border-border/50 fixed inset-y-0 left-0 z-40 hidden w-72 border-r backdrop-blur-xl lg:flex lg:flex-col">
        <SidebarHeader />

        <SidebarContent />
      </aside>

      <div className="fixed left-4 top-4 z-50 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="border-border/50 bg-background/80 backdrop-blur-xl"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="bg-background/95 w-[min(18rem,calc(100vw-1rem))] border-r p-0 backdrop-blur-xl"
          >
            <SidebarHeader />

            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
