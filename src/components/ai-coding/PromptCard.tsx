import CopyButton from '../common/CopyButton'
import type { AiPromptTemplate } from '../../types/prompt'

interface PromptCardProps {
  template: AiPromptTemplate
}

export default function PromptCard({ template }: PromptCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{template.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{template.description}</p>
        </div>
        <CopyButton idleLabel="复制 Prompt" text={template.prompt} />
      </div>
      <pre className="mt-4 max-h-56 overflow-auto whitespace-pre-wrap rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-700">
        {template.prompt}
      </pre>
    </article>
  )
}
