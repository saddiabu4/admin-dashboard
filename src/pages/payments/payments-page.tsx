import { CreditCard } from 'lucide-react'

import { PaymentsTable } from '@/features/payments/components/payments-table'

import { Card, CardContent } from '@/shared/ui/card'

import { Input } from '@/shared/ui/input'

export function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Payments</h1>

          <p className="text-muted-foreground mt-2">
            Track and manage all payment transactions.
          </p>
        </div>

        <Card className="w-full sm:w-[220px]">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="bg-primary/10 flex size-12 items-center justify-center rounded-2xl">
              <CreditCard className="text-primary size-6" />
            </div>

            <div>
              <p className="text-muted-foreground text-sm">Total Revenue</p>

              <h3 className="text-2xl font-bold">$48,920</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Input placeholder="Search payments..." className="max-w-sm" />
      </div>

      <PaymentsTable />
    </div>
  )
}
