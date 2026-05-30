# 数据规格

## 数据来源

MVP 使用本地静态 TypeScript 数据文件，不接入后端和数据库。

建议文件：

```text
src/data/questions.ts
src/data/aiPrompts.ts
```

## 题目数据模型

```ts
export type QuestionCategory =
  | "javascript"
  | "typescript"
  | "react"
  | "browser"
  | "network"
  | "engineering"
  | "performance"
  | "css"
  | "security"
  | "architecture"
  | "ai-coding";

export type QuestionDifficulty = "basic" | "intermediate" | "advanced";

export type QuestionFrequency = "low" | "medium" | "high";

export interface InterviewQuestion {
  id: string;
  title: string;
  summary: string;
  category: QuestionCategory;
  difficulty: QuestionDifficulty;
  frequency: QuestionFrequency;
  tags: string[];
  interviewerFocus: string[];
  answer: string;
  keyPoints: string[];
  followUps: FollowUpQuestion[];
  relatedQuestionIds?: string[];
}

export interface FollowUpQuestion {
  question: string;
  answerHint: string;
}
```

## 字段说明

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | `string` | 是 | 题目唯一标识，用于详情页路由 |
| `title` | `string` | 是 | 题目标题 |
| `summary` | `string` | 是 | 列表页摘要 |
| `category` | `QuestionCategory` | 是 | 题目分类 |
| `difficulty` | `QuestionDifficulty` | 是 | 难度 |
| `frequency` | `QuestionFrequency` | 是 | 高频程度 |
| `tags` | `string[]` | 是 | 搜索和展示标签 |
| `interviewerFocus` | `string[]` | 是 | 面试官考察点 |
| `answer` | `string` | 是 | 可复制的口述答案 |
| `keyPoints` | `string[]` | 是 | 答案关键点 |
| `followUps` | `FollowUpQuestion[]` | 是 | 追问及提示 |
| `relatedQuestionIds` | `string[]` | 否 | 关联题目 |

## 分类展示文案

```ts
export const categoryLabels: Record<QuestionCategory, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  browser: "浏览器",
  network: "网络",
  engineering: "工程化",
  performance: "性能优化",
  css: "CSS 与布局",
  security: "前端安全",
  architecture: "架构与项目经验",
  "ai-coding": "AI Coding",
};
```

## 难度展示文案

```ts
export const difficultyLabels: Record<QuestionDifficulty, string> = {
  basic: "基础",
  intermediate: "进阶",
  advanced: "高级",
};
```

## 高频程度展示文案

```ts
export const frequencyLabels: Record<QuestionFrequency, string> = {
  low: "低频",
  medium: "中频",
  high: "高频",
};
```

## 题目样例

```ts
export const questions: InterviewQuestion[] = [
  {
    id: "js-event-loop",
    title: "请解释浏览器中的事件循环机制",
    summary: "考察宏任务、微任务、渲染时机和异步执行顺序。",
    category: "javascript",
    difficulty: "advanced",
    frequency: "high",
    tags: ["事件循环", "宏任务", "微任务", "Promise"],
    interviewerFocus: [
      "是否理解同步任务、宏任务、微任务的执行顺序",
      "是否能结合 Promise、setTimeout、渲染解释实际输出",
      "是否知道浏览器和 Node.js 事件循环的差异",
    ],
    answer:
      "浏览器事件循环可以理解为主线程不断从任务队列中取任务执行。同步代码先执行，遇到异步任务时交给对应 Web API，回调进入任务队列。每轮宏任务执行完成后，会清空当前所有微任务，然后浏览器视情况进行渲染，再进入下一轮宏任务。Promise.then 属于微任务，setTimeout 属于宏任务，所以通常 Promise 回调会早于 setTimeout 回调执行。",
    keyPoints: ["同步代码优先", "每轮宏任务后清空微任务", "渲染通常发生在宏任务之间"],
    followUps: [
      {
        question: "requestAnimationFrame 在事件循环中处于什么位置？",
        answerHint: "它通常在浏览器下一次重绘前执行，适合做动画相关更新。",
      },
    ],
    relatedQuestionIds: ["browser-render-pipeline"],
  },
];
```

## Prompt 数据模型

```ts
export interface AiPromptTemplate {
  id: string;
  title: string;
  scenario: "spec" | "implementation" | "debug" | "refactor" | "test";
  description: string;
  prompt: string;
}
```

## 数据校验规则

- `id` 必须唯一。
- `title` 不应为空。
- `answer` 必须适合一键复制和口述。
- `tags` 至少 1 个。
- `followUps` 可以为空数组，但字段必须存在。
- `relatedQuestionIds` 指向的题目必须存在。

## 后续扩展预留

未来接入后端时，可增加：

- `createdAt`
- `updatedAt`
- `source`
- `version`
- `author`
- `isPublished`
- `viewCount`
- `userProgress`
