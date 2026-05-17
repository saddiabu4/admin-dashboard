import { Loader2 } from 'lucide-react'

type LoadingProps = {
  text?: string
}

export function Loading({ text = 'Loading...' }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Loader2 className="text-primary size-8 animate-spin" />

      <p className="text-muted-foreground mt-4 text-sm">{text}</p>
    </div>
  )
}
