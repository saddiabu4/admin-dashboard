import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'border-border/50 bg-background/70 placeholder:text-muted-foreground/70 focus-visible:ring-primary/30 flex h-12 w-full rounded-2xl border px-4 py-3 text-sm shadow-sm backdrop-blur-xl transition-all duration-300 outline-none focus-visible:border-indigo-500/40 focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
