import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<'div'> & {
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
}) {
  return (
    <div
      aria-orientation={orientation}
      role={decorative ? 'none' : 'separator'}
      data-slot="separator"
      data-orientation={orientation}
      className={cn(
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        'shrink-0 bg-border',
        className,
      )}
      {...props}
    />
  )
}

export { Separator }
