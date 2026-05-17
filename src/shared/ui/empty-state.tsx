import { SearchX } from 'lucide-react'

type EmptyStateProps = {
  title?: string

  description?: string
}

export function EmptyState({
  title = 'No results found',

  description = 'Try adjusting your search or filters.',
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed py-16 text-center">
      <div className="bg-muted mb-4 flex size-14 items-center justify-center rounded-2xl">
        <SearchX className="text-muted-foreground size-7" />
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-muted-foreground mt-2 max-w-sm text-sm">
        {description}
      </p>
    </div>
  )
}
