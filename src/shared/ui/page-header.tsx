import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string

  description?: string

  action?: ReactNode
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>

        {description && (
          <p className="text-muted-foreground mt-2">{description}</p>
        )}
      </div>

      {action}
    </div>
  )
}
