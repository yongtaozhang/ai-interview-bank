import { Check, Copy } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface CodeBlockProps {
  code: string
  title?: string
  language?: string
}

export default function CodeBlock({
  code,
  title = '代码示例',
  language,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number>()
  const trimmedCode = code.trim()
  const displayLanguage = language ?? inferCodeLanguage(code)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  if (!trimmedCode) {
    return null
  }

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false)
      }, 1500)
    } catch (error) {
      console.warn('复制代码失败', error)
    }
  }

  return (
    <div className="max-w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-900 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="truncate text-sm font-semibold text-slate-100">{title}</span>
          <span className="rounded-md bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-400">
            {displayLanguage}
          </span>
        </div>
        <button
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-slate-700 bg-slate-900 px-2.5 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 active:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          onClick={() => void copyCode()}
          type="button"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
          ) : (
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          {copied ? '已复制' : '复制'}
        </button>
      </div>
      <pre className="max-h-[34rem] max-w-full overflow-x-auto overflow-y-auto p-4 text-sm leading-6 text-slate-100">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  )
}

function inferCodeLanguage(code: string) {
  if (/\b(interface|type)\s+\w+/.test(code) || /\bReact\.FC\b/.test(code) || /<[A-Z][\w.]*[\s>]/.test(code)) {
    return 'TypeScript'
  }

  return 'JavaScript'
}
