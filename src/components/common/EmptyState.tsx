import { SearchX } from 'lucide-react'

interface EmptyStateProps {
  title: string
  description: string
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        <SearchX className="h-6 w-6" aria-hidden="true" />
      </div>
      <h2 className="mt-4 text-lg font-semibold text-slate-950">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">{description}</p>
    </div>
  )
}
