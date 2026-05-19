import type { Report } from '../types'

import { useTranslation } from 'react-i18next'

type ReportsChartProps = {
  data?: Report[]
}

export function ReportsChart({ data = [] }: ReportsChartProps) {
  const { t } = useTranslation()

  return <div data-slot="reports-chart">{t('reports.chart.label')}: {data.length}</div>
}
