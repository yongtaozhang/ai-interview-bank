import type { AiPromptTemplate } from '../types/prompt'

export const aiPrompts: AiPromptTemplate[] = [
  {
    id: 'spec-breakdown',
    title: '从需求生成规格文档',
    scenario: 'spec',
    description: '适用于把模糊需求拆成产品、技术、数据、UI 和验收约束。',
    prompt:
      '请根据以下需求生成 MVP 规格文档，明确产品目标、用户路径、技术方案、数据模型、UI 信息架构、任务拆分和验收清单。要求区分 MVP 范围和暂不实现范围，不要加入后端、登录或超出需求的能力。需求如下：',
  },
  {
    id: 'component-implementation',
    title: '按规格实现组件',
    scenario: 'implementation',
    description: '适用于在既有 React + TypeScript 项目中实现单个页面或组件。',
    prompt:
      '请阅读 specs 中的产品规格和技术规格，只实现当前任务要求的 React + TypeScript 组件。遵守现有目录结构和 Tailwind 样式方案，不引入新的状态管理库或 UI 组件库。完成后说明修改文件、实现功能、本地验证方式和未完成项。',
  },
  {
    id: 'bug-fix',
    title: '定位并修复 Bug',
    scenario: 'debug',
    description: '适用于描述异常现象后，让 Codex 先定位原因再做小范围修复。',
    prompt:
      '请根据以下 Bug 现象定位问题来源，优先阅读相关代码和规格文档。只做最小必要修复，不重构无关代码。修复后运行相关检查，并说明根因、修改文件、验证结果和剩余风险。Bug 现象如下：',
  },
  {
    id: 'safe-refactor',
    title: '受控重构',
    scenario: 'refactor',
    description: '适用于在不改变行为的前提下整理结构或抽取复用逻辑。',
    prompt:
      '请在不改变现有功能和路由行为的前提下重构以下代码。保持 TypeScript 类型安全，遵守项目目录结构，避免引入新依赖。重构完成后说明行为是否保持一致、修改文件和验证命令。',
  },
  {
    id: 'test-coverage',
    title: '补齐测试思路',
    scenario: 'test',
    description: '适用于为搜索、筛选、复制等纯逻辑或交互补充测试计划。',
    prompt:
      '请根据当前实现补齐测试方案，优先覆盖纯函数、边界条件和用户关键路径。不要为了测试引入超出项目技术规格的大型框架。请说明建议测试用例、需要新增或修改的文件，以及如何运行验证。',
  },
]
