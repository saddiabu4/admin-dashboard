import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="scroll-area"
      className={cn('relative overflow-hidden', className)}
    >
      <div
        data-slot="scroll-area-viewport"
        className="h-full w-full overflow-auto"
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

export { ScrollArea }
