import { useState } from 'react'

import { CreditCard, Search } from 'lucide-react'

import { PaymentsTable } from '@/features/payments/components/payments-table'

import { useDebounce } from '@/shared/hooks/use-debounce'

import { Card, CardContent } from '@/shared/ui/card'

import { Input } from '@/shared/ui/input'

export function PaymentsPage() {
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search)

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-4xl font-black tracking-tight">Payments</h1>

          <p className="text-muted-foreground mt-3 text-base">
            Track and manage all payment transactions.
          </p>
        </div>

        <Card className="border-border/50 bg-background/70 w-full overflow-hidden border shadow-sm backdrop-blur-xl sm:w-64">
          <CardContent className="relative flex items-center gap-4 p-5">
            <div className="absolute right-[-20px] top-[-20px] h-20 w-20 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="flex size-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
              <CreditCard className="size-7" />
            </div>

            <div>
              <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                Total Revenue
              </p>

              <h3 className="mt-1 text-3xl font-black tracking-tight">
                $48,920
              </h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative w-full max-w-sm">
          <Search className="text-muted-foreground absolute left-4 top-1/2 size-4 -translate-y-1/2" />

          <Input
            placeholder="Search payments..."
            className="h-12 pl-11"
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </div>
      </div>

      <PaymentsTable search={debouncedSearch} />
    </div>
  )
}
