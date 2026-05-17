import { CreditCard, DollarSign, FileText, Users } from 'lucide-react'

import { Card, CardContent } from '@/shared/ui/card'

const stats = [
  {
    title: 'Total Users',

    value: '2,450',

    icon: Users,
  },

  {
    title: 'Revenue',

    value: '$48,920',

    icon: DollarSign,
  },

  {
    title: 'Payments',

    value: '1,240',

    icon: CreditCard,
  },

  {
    title: 'Reports',

    value: '320',

    icon: FileText,
  },
]

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-muted-foreground mt-2">
          Welcome to your admin dashboard overview.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(item => {
          const Icon = item.icon

          return (
            <Card key={item.title} className="shadow-sm">
              <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-1">
                  <p className="text-muted-foreground text-sm">{item.title}</p>

                  <h2 className="text-3xl font-bold">{item.value}</h2>
                </div>

                <div className="bg-primary/10 flex size-12 items-center justify-center rounded-2xl">
                  <Icon className="text-primary size-6" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold">Analytics Overview</h3>

            <div className="bg-muted flex h-72 items-center justify-center rounded-xl">
              Chart Area
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <span className="text-sm">New payment received</span>

                <span className="text-muted-foreground text-xs">2m ago</span>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-3">
                <span className="text-sm">New user registered</span>

                <span className="text-muted-foreground text-xs">10m ago</span>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-3">
                <span className="text-sm">Report generated</span>

                <span className="text-muted-foreground text-xs">30m ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
