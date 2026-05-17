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
        <h1 className="text-4xl font-black tracking-tight">Dashboard</h1>

        <p className="text-muted-foreground mt-3 text-base">
          Welcome to your enterprise admin dashboard overview.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(item => {
          const Icon = item.icon

          return (
            <Card
              key={item.title}
              className="group border-border/50 bg-background/70 relative overflow-hidden border shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <CardContent className="relative flex items-center justify-between p-6">
                <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/20" />

                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                    {item.title}
                  </p>

                  <h2 className="text-4xl font-black tracking-tight">
                    {item.value}
                  </h2>
                </div>

                <div className="flex size-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="size-7" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <Card className="border-border/50 bg-background/70 border backdrop-blur-xl xl:col-span-2">
          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold tracking-tight">
                Analytics Overview
              </h3>

              <p className="text-muted-foreground mt-1 text-sm">
                Revenue and platform activity insights
              </p>
            </div>

            <div className="bg-muted/50 border-border/50 flex h-72 items-center justify-center rounded-3xl border">
              <span className="text-muted-foreground text-sm">
                Analytics Chart
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-background/70 border backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold tracking-tight">
                Recent Activity
              </h3>

              <p className="text-muted-foreground mt-1 text-sm">
                Latest system updates
              </p>
            </div>

            <div className="space-y-4">
              <div className="hover:bg-muted/50 border-border/50 flex items-center justify-between rounded-2xl border p-4 transition-colors">
                <span className="text-sm font-medium">
                  New payment received
                </span>

                <span className="text-muted-foreground text-xs">2m ago</span>
              </div>

              <div className="hover:bg-muted/50 border-border/50 flex items-center justify-between rounded-2xl border p-4 transition-colors">
                <span className="text-sm font-medium">New user registered</span>

                <span className="text-muted-foreground text-xs">10m ago</span>
              </div>

              <div className="hover:bg-muted/50 border-border/50 flex items-center justify-between rounded-2xl border p-4 transition-colors">
                <span className="text-sm font-medium">Report generated</span>

                <span className="text-muted-foreground text-xs">30m ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
