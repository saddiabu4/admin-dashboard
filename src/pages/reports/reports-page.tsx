import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { Card, CardContent } from '@/shared/ui/card'

const data = [
  {
    month: 'Jan',

    revenue: 4000,
  },

  {
    month: 'Feb',

    revenue: 3000,
  },

  {
    month: 'Mar',

    revenue: 5200,
  },

  {
    month: 'Apr',

    revenue: 4100,
  },

  {
    month: 'May',

    revenue: 6200,
  },

  {
    month: 'Jun',

    revenue: 5800,
  },
]

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Reports</h1>

        <p className="text-muted-foreground mt-2">
          Analytics and revenue insights overview.
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Revenue Overview</h2>

            <p className="text-muted-foreground text-sm">
              Monthly revenue analytics
            </p>
          </div>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="revenue" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
