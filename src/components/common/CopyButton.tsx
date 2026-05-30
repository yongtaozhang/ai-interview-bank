import { AlertCircle, Check, Copy } from 'lucide-react'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'

interface CopyButtonProps {
  text: string
  idleLabel: string
  successLabel?: string
  errorLabel?: string
}

export default function CopyButton({
  text,
  idleLabel,
  successLabel = '已复制',
  errorLabel = '复制失败',
}: CopyButtonProps) {
  const { copy, status } = useCopyToClipboard()
  const isSuccess = status === 'success'
  const isError = status === 'error'

  return (
    <button
      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 active:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={() => void copy(text)}
      type="button"
    >
      {isSuccess ? <Check className="h-4 w-4 text-green-600" aria-hidden="true" /> : null}
      {isError ? <AlertCircle className="h-4 w-4 text-red-600" aria-hidden="true" /> : null}
      {!isSuccess && !isError ? <Copy className="h-4 w-4" aria-hidden="true" /> : null}
      {isSuccess ? successLabel : null}
      {isError ? errorLabel : null}
      {!isSuccess && !isError ? idleLabel : null}
    </button>
  )
}
