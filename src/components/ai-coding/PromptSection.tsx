import PromptCard from './PromptCard'
import type { AiPromptTemplate, PromptScenario } from '../../types/prompt'
import { promptScenarioLabels } from '../../types/prompt'

interface PromptSectionProps {
  scenario: PromptScenario
  templates: AiPromptTemplate[]
}

export default function PromptSection({ scenario, templates }: PromptSectionProps) {
  if (templates.length === 0) {
    return null
  }

  return (
    <section className="space-y-3" aria-labelledby={`prompt-section-${scenario}`}>
      <div>
        <h2 id={`prompt-section-${scenario}`} className="text-xl font-bold text-slate-950">
          {promptScenarioLabels[scenario]}
        </h2>
      </div>
      <div className="grid gap-4">
        {templates.map((template) => (
          <PromptCard key={template.id} template={template} />
        ))}
      </div>
    </section>
  )
}
