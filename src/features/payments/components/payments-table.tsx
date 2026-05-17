import { useState } from 'react'

import { usePayments } from '../hooks/use-payments'

import { Badge } from '@/shared/ui/badge'

import { Button } from '@/shared/ui/button'

import { Card, CardContent } from '@/shared/ui/card'

import { EmptyState } from '@/shared/ui/empty-state'

import { Loading } from '@/shared/ui/loading'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table'

type PaymentsTableProps = {
  search: string
}

export function PaymentsTable({ search }: PaymentsTableProps) {
  const { data, isLoading } = usePayments()

  const [page, setPage] = useState(1)

  const pageSize = 10

  const filteredPayments =
    data?.filter(payment =>
      payment.customer.toLowerCase().includes(search.toLowerCase()),
    ) ?? []

  const paginatedPayments = filteredPayments.slice(
    (page - 1) * pageSize,
    page * pageSize,
  )

  if (isLoading) {
    return <Loading text="Loading payments..." />
  }

  if (!filteredPayments.length) {
    return (
      <EmptyState
        title="No payments found"
        description="Try searching with a different keyword."
      />
    )
  }

  return (
    <Card className="border-border/50 bg-background/70 overflow-hidden border shadow-sm backdrop-blur-xl">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>

              <TableHead>Amount</TableHead>

              <TableHead>Status</TableHead>

              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedPayments.map(payment => (
              <TableRow key={payment.id}>
                <TableCell className="font-semibold">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md shadow-indigo-500/20">
                      {payment.customer[0]}
                    </div>

                    <div>
                      <p className="font-semibold">{payment.customer}</p>

                      <p className="text-muted-foreground text-xs">
                        Payment Client
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <span className="font-semibold text-emerald-500">
                    ${payment.amount}
                  </span>
                </TableCell>

                <TableCell>
                  <Badge
                    className={
                      payment.status === 'Paid'
                        ? 'rounded-xl border border-emerald-500/10 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500'
                        : 'rounded-xl border border-yellow-500/10 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-500'
                    }
                  >
                    {payment.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-muted-foreground">
                  {payment.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="border-border/50 flex items-center justify-between border-t p-5">
          <div className="text-muted-foreground text-sm">
            Showing{' '}
            <span className="font-semibold text-foreground">
              {paginatedPayments.length}
            </span>{' '}
            payments
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              disabled={page === 1}
              onClick={() => setPage(prev => prev - 1)}
            >
              Previous
            </Button>

            <div className="bg-background/70 border-border/50 rounded-2xl border px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur-xl">
              Page {page}
            </div>

            <Button
              variant="outline"
              disabled={page * pageSize >= filteredPayments.length}
              onClick={() => setPage(prev => prev + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
