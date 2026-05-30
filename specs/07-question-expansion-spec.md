# 题库扩充规格

## 1. 扩充目标

将当前前端面试宝典题库扩充到 96 道题，继续保持 MVP 的静态题库形态。

本次扩充只面向题库内容规模和内容质量，不改变现有产品功能、路由、页面结构、搜索筛选逻辑、复制能力或数据来源方式。

扩充后的题库应覆盖资深前端面试中的高频知识点、手写题、系统设计题、工程实践题和 AI Coding 相关题目，帮助用户快速检索、复述、追问和查漏补缺。

## 2. 分类数量目标

`questions.ts` 最终应正好包含 96 道题，分类数量如下：

| 分类 | 目标数量 |
| --- | ---: |
| `react` | 18 |
| `typescript` | 10 |
| `performance` | 10 |
| `engineering` | 10 |
| `browser` | 8 |
| `handwriting` | 14 |
| `algorithm` | 8 |
| `ai-coding` | 8 |
| `project` | 10 |
| 合计 | 96 |

## 3. 最近高频方向

扩充题库时必须覆盖以下最近高频方向：

- React 渲染机制
- React 19.2 Activity
- useEffectEvent
- React Compiler
- useTransition
- Suspense
- TypeScript 类型安全请求层
- Web Vitals
- INP 优化
- Long Task 排查
- Vite 构建优化
- Monorepo
- CI/CD 质量门禁
- AI Coding
- Spec Coding
- AI Agent 代码 review
- 流式 AI Chat 组件设计
- 前端监控系统设计
- 埋点 SDK 设计
- 权限系统设计

## 4. 每道题的数据质量要求

每道题必须满足当前题库基础字段要求：

- `id`：唯一、稳定、语义清晰，使用 kebab-case。
- `title`：面试题标题明确，不使用含糊标题。
- `summary`：一句话说明考察范围。
- `category`：必须属于本规格定义的 9 个目标分类之一。
- `difficulty`：必须为 `basic`、`intermediate` 或 `advanced`。
- `frequency`：必须为 `low`、`medium` 或 `high`。
- `tags`：至少 2 个标签，标签应便于搜索。
- `interviewerFocus`：至少 3 条，说明面试官考察点。
- `answer`：必须是适合口述的答案，不写成纯教材段落。
- `keyPoints`：至少 3 条，能帮助快速复习。
- `followUps`：至少 1 条追问，包含 `question` 和 `answerHint`。
- `relatedQuestionIds`：可选；如填写，必须指向真实存在的题目 id。

手写题额外要求：

- `category` 为 `handwriting` 的题目必须包含 `code`。
- `code` 应给出可读、可讲解的 TypeScript 或 JavaScript 示例。
- 手写题答案必须说明核心思路、边界情况和复杂度或实现取舍。

系统设计题额外要求：

- `category` 为 `project` 的题目必须包含 `scene`。
- `scene` 应描述业务背景、用户规模、约束或关键设计目标。
- 系统设计题答案必须覆盖架构拆分、数据流、异常处理和可扩展性。

内容质量要求：

- 不得复制粘贴重复答案。
- 不得只给关键词堆砌，必须可用于面试口述。
- 高频题应优先放入最近高频方向。
- 同一知识点可以有不同角度，但题目标题、答案重点和追问必须区分。
- 答案应保持准确、克制，不引入不确定或未经验证的新概念。

## 5. 禁止新增的功能

本次只扩充题库数据和必要类型规格，不新增产品功能。

禁止新增：

- 登录、注册、用户系统。
- 后端 API。
- 数据库。
- 收藏。
- 刷题流程。
- 掌握状态。
- 统计看板。
- 题目编辑后台。
- 在线同步。
- 评论、分享、付费或社区能力。
- 新路由。
- 新页面。
- 新状态管理库。
- 新 UI 组件库。

如扩充数据需要新增类型字段，只允许围绕题目内容表达，例如 `code` 和 `scene`，不得借机引入用户行为、统计或后端相关字段。

## 6. 分批扩充计划

### 批次 1：类型和分类准备

- 明确 `handwriting`、`algorithm`、`project` 分类。
- 明确手写题 `code` 字段规格。
- 明确系统设计题 `scene` 字段规格。
- 保持现有搜索、筛选和详情页展示能力可兼容新增分类和字段。

### 批次 2：React 与 TypeScript 高频题

- 将 `react` 扩充到 18 道。
- 将 `typescript` 扩充到 10 道。
- 必须覆盖 React 渲染机制、React 19.2 Activity、useEffectEvent、React Compiler、useTransition、Suspense、TypeScript 类型安全请求层。

### 批次 3：性能、浏览器与工程化

- 将 `performance` 扩充到 10 道。
- 将 `browser` 扩充到 8 道。
- 将 `engineering` 扩充到 10 道。
- 必须覆盖 Web Vitals、INP 优化、Long Task 排查、Vite 构建优化、Monorepo、CI/CD 质量门禁。

### 批次 4：手写题与算法题

- 将 `handwriting` 扩充到 14 道。
- 将 `algorithm` 扩充到 8 道。
- 手写题必须包含 `code`。
- 算法题应偏前端面试常见场景，避免扩展成通用算法刷题平台。

### 批次 5：AI Coding 与项目系统设计

- 将 `ai-coding` 扩充到 8 道。
- 将 `project` 扩充到 10 道。
- 必须覆盖 AI Coding、Spec Coding、AI Agent 代码 review、流式 AI Chat 组件设计、前端监控系统设计、埋点 SDK 设计、权限系统设计。
- `project` 分类题目必须包含 `scene`。

### 批次 6：一致性校验和验收

- 检查总数是否正好 96 道。
- 检查分类数量是否符合目标。
- 检查是否存在重复 id。
- 检查每道题字段是否完整。
- 检查手写题是否包含 `code`。
- 检查系统设计题是否包含 `scene`。
- 运行 `npm run build`。

## 7. 验收标准

最终验收必须满足：

1. `questions.ts` 最终正好 96 道题。
2. 分类数量符合目标：
   - `react`：18 道
   - `typescript`：10 道
   - `performance`：10 道
   - `engineering`：10 道
   - `browser`：8 道
   - `handwriting`：14 道
   - `algorithm`：8 道
   - `ai-coding`：8 道
   - `project`：10 道
3. 不存在重复 `id`。
4. 每道题字段完整。
5. 手写题包含 `code`。
6. 系统设计题包含 `scene`。
7. `npm run build` 通过。

本规格创建阶段只要求新增本文档，不修改业务代码，不修改 `questions.ts`。
