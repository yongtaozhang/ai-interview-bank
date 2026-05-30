export type PromptScenario = 'spec' | 'implementation' | 'debug' | 'refactor' | 'test'

export interface AiPromptTemplate {
  id: string
  title: string
  scenario: PromptScenario
  description: string
  prompt: string
}

export const promptScenarioLabels: Record<PromptScenario, string> = {
  spec: '需求拆解',
  implementation: '组件实现',
  debug: 'Bug 修复',
  refactor: '重构',
  test: '测试补齐',
}
