# 技术规格

## 技术栈

- 构建工具：Vite
- UI 框架：React
- 类型系统：TypeScript
- 路由：React Router
- 样式：Tailwind CSS
- 搜索：Fuse.js
- 图标：Lucide React

## 推荐目录结构

```text
src/
  app/
    App.tsx
    router.tsx
  components/
    common/
    layout/
    questions/
    filters/
  data/
    questions.ts
    aiPrompts.ts
  hooks/
    useQuestionSearch.ts
    useCopyToClipboard.ts
  pages/
    HomePage.tsx
    QuestionsPage.tsx
    QuestionDetailPage.tsx
    AiCodingPage.tsx
    NotFoundPage.tsx
  types/
    question.ts
    prompt.ts
  utils/
    questionFilters.ts
    questionSearch.ts
```

## 路由设计

| 路由 | 页面 | 说明 |
| --- | --- | --- |
| `/` | `HomePage` | 首页、项目入口、推荐分类 |
| `/questions` | `QuestionsPage` | 题库列表、搜索、筛选 |
| `/questions/:id` | `QuestionDetailPage` | 题目详情 |
| `/ai-coding` | `AiCodingPage` | Codex Prompt 模板 |
| `*` | `NotFoundPage` | 兜底页面 |

## 状态管理

MVP 不引入全局状态管理库。页面级状态用 React 内置能力处理：

- 搜索关键词：`useState`
- 分类筛选：`useState`
- 高频筛选：`useState`
- 派生后的题目列表：`useMemo`

## 搜索方案

使用 Fuse.js 对静态题库进行模糊搜索。

建议搜索字段：

- `title`
- `summary`
- `tags`
- `category`
- `answer`
- `keyPoints`

建议基础配置：

```ts
const fuseOptions = {
  keys: ["title", "summary", "tags", "category", "answer", "keyPoints"],
  threshold: 0.35,
  ignoreLocation: true,
};
```

## 筛选方案

筛选顺序建议：

1. 先应用分类筛选。
2. 再应用难度筛选。
3. 再应用高频程度筛选。
4. 最后应用关键词搜索，或先搜索后筛选，但需要保持结果符合所有条件。

筛选工具函数应保持纯函数，方便测试：

```ts
filterQuestions(questions, filters)
searchQuestions(questions, keyword)
```

## 组件拆分

### Layout

- `AppLayout`：整体布局。
- `Header`：顶部导航。
- `MobileNav`：移动端导航，可选。

### Common

- `PageHeader`：页面标题区。
- `EmptyState`：空结果提示。
- `CopyButton`：复制按钮。
- `Badge`：标签、难度、高频标识。

### Questions

- `QuestionCard`：题目列表卡片。
- `QuestionList`：题目列表。
- `QuestionMeta`：题目元信息。
- `QuestionAnswer`：口述答案展示。
- `FollowUpList`：追问列表。
- `KeyPointList`：关键点列表。

### Filters

- `SearchInput`：搜索框。
- `CategoryFilter`：分类筛选。
- `DifficultyFilter`：难度筛选。
- `FrequencyFilter`：高频筛选。
- `FilterBar`：筛选组合容器。

### AI Coding

- `PromptCard`：单个 Prompt 模板。
- `PromptSection`：模板分组。

## 复制能力

使用浏览器 Clipboard API：

```ts
navigator.clipboard.writeText(text)
```

需要处理：

- 成功状态。
- 失败状态。
- 浏览器权限不可用时的提示。

## 类型约束

所有题库数据必须通过 TypeScript 类型约束。避免在页面中散落字符串约定。

## 性能要求

- MVP 数据量较小时可在前端内存中完成搜索和筛选。
- 使用 `useMemo` 避免不必要的重复计算。
- 题库数据未来超过数千条时，再考虑分页、虚拟列表或后端搜索。

## 可访问性要求

- 搜索框需要有明确 `label` 或 `aria-label`。
- 可点击卡片需要清晰焦点状态。
- 复制按钮需要可键盘操作。
- 筛选控件需要可通过键盘访问。

## 工程约束

- 第一版不接入后端。
- 第一版不引入复杂状态管理。
- 第一版不做 UI 组件库依赖，优先 Tailwind + 小组件。
- 代码应保持可迁移：未来接入 API 时，页面不应大面积重写。
