import type { LucideIcon } from 'lucide-react'

import { CreditCard, FileText, LayoutDashboard, Shield } from 'lucide-react'

import type { UserRole } from '@/features/auth/types'

import { routes } from '@/shared/constants/routes'

type NavigationItem = {
  label: string

  href: string

  icon: LucideIcon

  roles?: readonly UserRole[]
}

export const navigation: NavigationItem[] = [
  {
    label: 'Dashboard',

    href: routes.dashboard,

    icon: LayoutDashboard,
  },

  {
    label: 'Users',

    href: routes.users,

    icon: Shield,

    roles: ['ADMIN'],
  },

  {
    label: 'Payments',

    href: routes.payments,

    icon: CreditCard,

    roles: ['PAYMENT', 'ADMIN'],
  },

  {
    label: 'Reports',

    href: routes.reports,

    icon: FileText,

    roles: ['REPORTS', 'ADMIN'],
  },
]
