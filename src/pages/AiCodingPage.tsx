import { useMemo } from 'react'
import PromptSection from '../components/ai-coding/PromptSection'
import { aiPrompts } from '../data/aiPrompts'
import type { PromptScenario } from '../types/prompt'

const promptScenarioOrder: PromptScenario[] = ['spec', 'implementation', 'debug', 'refactor', 'test']

export default function AiCodingPage() {
  const promptsByScenario = useMemo(
    () =>
      promptScenarioOrder.map((scenario) => ({
        scenario,
        templates: aiPrompts.filter((template) => template.scenario === scenario),
      })),
    [],
  )

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">AI Coding</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          面向 Spec Coding、组件实现、Bug 修复、重构和测试补齐的 Codex Prompt 模板。
        </p>
      </div>

      <div className="space-y-6">
        {promptsByScenario.map(({ scenario, templates }) => (
          <PromptSection key={scenario} scenario={scenario} templates={templates} />
        ))}
      </div>
    </section>
  )
}
