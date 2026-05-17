import { cva, type VariantProps } from 'class-variance-authority'

import { Slot } from 'radix-ui'

import * as React from 'react'

import { cn } from '@/shared/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-2xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-300 outline-none select-none active:scale-[0.98] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/30',

        outline:
          'border-border/50 bg-background/70 backdrop-blur-xl hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-500',

        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',

        ghost: 'hover:bg-indigo-500/10 hover:text-indigo-500',

        destructive:
          'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/20 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/30',

        link: 'text-primary underline-offset-4 hover:underline',
      },

      size: {
        default:
          'h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',

        xs: "h-7 gap-1 rounded-xl px-2 text-xs [&_svg:not([class*='size-'])]:size-3",

        sm: "h-8 gap-1.5 rounded-xl px-3 text-sm [&_svg:not([class*='size-'])]:size-3.5",

        lg: 'h-11 gap-2 px-5 text-base',

        icon: 'size-10',

        'icon-xs': "size-7 rounded-xl [&_svg:not([class*='size-'])]:size-3",

        'icon-sm': 'size-8 rounded-xl',

        'icon-lg': 'size-11 rounded-2xl',
      },
    },

    defaultVariants: {
      variant: 'default',

      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  )
}

export { Button }
