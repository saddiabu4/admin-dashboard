import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">
          {t('reports.page.title')}
        </h1>

        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          {t('reports.page.description')}
        </p>
      </div>

      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold sm:text-xl">
              {t('reports.page.revenueOverview')}
            </h2>

            <p className="text-muted-foreground text-sm">
              {t('reports.page.monthlyRevenue')}
            </p>
          </div>

          <div className="h-72 w-full sm:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

                <XAxis dataKey="month" />

                <YAxis width={40} />

                <Tooltip />

                <Bar dataKey="revenue" radius={[8, 8, 0, 0]} fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
