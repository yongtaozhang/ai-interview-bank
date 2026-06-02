# Code Inline Comment Spec

## 1. Goal

为前端面试宝典项目中的代码题增加「代码内联注释」规范。

本 Spec 用于约束 Codex / AI Agent 在新增或修改代码题时，必须在 `code` 字段中的关键步骤添加清晰、适量的中文注释，帮助用户理解代码实现过程，并方便面试时口述。

目标不是把每一行代码都翻译成中文，而是在关键逻辑处添加必要注释，让代码更容易读、更容易背、更容易讲。

---

## 2. Scope

适用于以下任务：

- 新增代码题
- 修改已有代码题
- 给已有 `code` 字段补充注释
- 检查代码题质量
- 优化 handwriting / algorithm 分类题目

允许修改：

- `src/data/questions.ts`
- 题库校验脚本，如果存在
- 与题库内容相关的测试或校验逻辑

禁止修改：

- 页面路由
- 搜索筛选逻辑
- 题目详情页 UI
- 收藏、刷题、统计、登录、后端等 MVP 之外功能
- 不要新增 `codeComment` 字段，除非用户明确要求

---

## 3. When Code Must Have Comments

以下分类中的题目，如果包含 `code` 字段，必须给代码添加内联注释：

```ts
'handwriting'
'algorithm'