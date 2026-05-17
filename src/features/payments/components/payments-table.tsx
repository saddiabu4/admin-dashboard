import type { Payment } from '../types'

type PaymentsTableProps = {
  data?: Payment[]
}

export function PaymentsTable({ data = [] }: PaymentsTableProps) {
  return <div data-slot="payments-table">Payments: {data.length}</div>
}
