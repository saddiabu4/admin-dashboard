import { ChevronDownIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Select({
  className,
  children,
  ...props
}: React.ComponentProps<'select'>) {
  return (
    <div className="relative">
      <select
        data-slot="select"
        className={cn(
          'h-8 w-full appearance-none rounded-lg border border-input bg-background px-2.5 pr-8 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      >
        {children}
      </select>

      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  )
}

export { Select }
