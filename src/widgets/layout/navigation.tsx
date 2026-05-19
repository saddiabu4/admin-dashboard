import type { LucideIcon } from 'lucide-react'

import { CreditCard, FileText, LayoutDashboard, Shield } from 'lucide-react'

import type { UserRole } from '@/features/auth/types'

import { routes } from '@/shared/constants/routes'

type NavigationItem = {
  labelKey: string

  href: string

  icon: LucideIcon

  roles?: readonly UserRole[]
}

export const navigation: NavigationItem[] = [
  {
    labelKey: 'navigation.dashboard',

    href: routes.dashboard,

    icon: LayoutDashboard,
  },

  {
    labelKey: 'navigation.users',

    href: routes.users,

    icon: Shield,

    roles: ['ADMIN'],
  },

  {
    labelKey: 'navigation.payments',

    href: routes.payments,

    icon: CreditCard,

    roles: ['PAYMENT', 'ADMIN'],
  },

  {
    labelKey: 'navigation.reports',

    href: routes.reports,

    icon: FileText,

    roles: ['REPORTS', 'ADMIN'],
  },
]
