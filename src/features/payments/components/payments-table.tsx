import { Badge } from '@/shared/ui/badge'

import { Card, CardContent } from '@/shared/ui/card'

import { Skeleton } from '@/shared/ui/skeleton'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table'

import { usePayments } from '../hooks/use-payments'

export function PaymentsTable() {
  const { data, isLoading } = usePayments()

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />

        <Skeleton className="h-12 w-full" />

        <Skeleton className="h-12 w-full" />
      </div>
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
            {data?.map(payment => (
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
      </CardContent>
    </Card>
  )
}
