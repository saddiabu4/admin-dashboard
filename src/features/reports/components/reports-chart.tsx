import type { Report } from '../types'

type ReportsChartProps = {
  data?: Report[]
}

export function ReportsChart({ data = [] }: ReportsChartProps) {
  return <div data-slot="reports-chart">Reports: {data.length}</div>
}
