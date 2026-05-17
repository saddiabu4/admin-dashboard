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
    <Card>
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
                <TableCell className="font-medium">
                  {payment.customer}
                </TableCell>

                <TableCell>${payment.amount}</TableCell>

                <TableCell>
                  <Badge
                    variant={
                      payment.status === 'Paid' ? 'default' : 'secondary'
                    }
                  >
                    {payment.status}
                  </Badge>
                </TableCell>

                <TableCell>{payment.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-end gap-3 border-t p-4">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage(prev => prev - 1)}
          >
            Previous
          </Button>

          <span className="text-sm font-medium">Page {page}</span>

          <Button
            variant="outline"
            disabled={page * pageSize >= filteredPayments.length}
            onClick={() => setPage(prev => prev + 1)}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
