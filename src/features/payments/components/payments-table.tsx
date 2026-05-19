import { useState } from 'react'

import { useTranslation } from 'react-i18next'

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

  const { t } = useTranslation()

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
        title={t('payments.table.noPaymentsTitle')}
        description={t('payments.table.noPaymentsDescription')}
      />
    )
  }

  return (
    <Card className="border-border/50 bg-background/70 overflow-hidden border shadow-sm backdrop-blur-xl">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('payments.table.customer')}</TableHead>

              <TableHead>{t('payments.table.amount')}</TableHead>

              <TableHead className="hidden sm:table-cell">
                {t('payments.table.status')}
              </TableHead>

              <TableHead className="hidden md:table-cell">
                {t('payments.table.date')}
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedPayments.map(payment => (
              <TableRow key={payment.id}>
                <TableCell className="font-semibold">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md shadow-indigo-500/20 sm:size-10">
                      {payment.customer[0]}
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold">{payment.customer}</p>

                      <p className="text-muted-foreground truncate text-xs">
                        {t('payments.table.paymentClient')}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <span className="font-semibold text-emerald-500">
                    ${payment.amount}
                  </span>
                </TableCell>

                <TableCell className="hidden sm:table-cell">
                  <Badge
                    className={
                      payment.status === 'Paid'
                        ? 'rounded-xl border border-emerald-500/10 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500'
                        : 'rounded-xl border border-yellow-500/10 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-500'
                    }
                  >
                    {t(`payments.status.${payment.status.toLowerCase()}`)}
                  </Badge>
                </TableCell>

                <TableCell className="text-muted-foreground hidden md:table-cell">
                  {payment.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="border-border/50 flex flex-col gap-4 border-t p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="text-muted-foreground text-sm">
            {t('payments.table.showing')}{' '}
            <span className="font-semibold text-foreground">
              {paginatedPayments.length}
            </span>{' '}
            {t('payments.table.paymentsCount')}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(prev => prev - 1)}
            >
              {t('payments.table.previous')}
            </Button>

            <div className="bg-background/70 border-border/50 rounded-2xl border px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur-xl sm:px-4">
              {t('payments.table.page')} {page}
            </div>

            <Button
              variant="outline"
              size="sm"
              disabled={page * pageSize >= filteredPayments.length}
              onClick={() => setPage(prev => prev + 1)}
            >
              {t('payments.table.next')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
