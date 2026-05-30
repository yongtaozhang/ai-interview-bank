import { useCallback, useEffect, useState } from 'react'

export type CopyStatus = 'idle' | 'success' | 'error'

function fallbackCopyText(text: string) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.setAttribute('readonly', '')
  textArea.style.position = 'fixed'
  textArea.style.left = '-9999px'
  textArea.style.top = '0'
  document.body.appendChild(textArea)
  textArea.select()

  try {
    return document.execCommand('copy')
  } finally {
    document.body.removeChild(textArea)
  }
}

export function useCopyToClipboard(resetDelay = 1600) {
  const [status, setStatus] = useState<CopyStatus>('idle')

  const copy = useCallback(async (text: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text)
      } else if (!fallbackCopyText(text)) {
        throw new Error('Clipboard copy is unavailable')
      }

      setStatus('success')
      return true
    } catch {
      if (fallbackCopyText(text)) {
        setStatus('success')
        return true
      }

      setStatus('error')
      return false
    }
  }, [])

  useEffect(() => {
    if (status === 'idle') {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setStatus('idle')
    }, resetDelay)

    return () => window.clearTimeout(timeoutId)
  }, [resetDelay, status])

  return { copy, status }
}
