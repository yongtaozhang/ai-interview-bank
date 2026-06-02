# Code Answer Spec

## 1. Goal

为前端面试宝典项目中需要写代码的题目补充高质量代码内容。

本 Spec 用于约束 Codex / AI Agent 在新增、修改、检查面试题时，识别哪些题目需要 `code` 字段，并生成适合前端面试场景的 JavaScript / TypeScript 代码。

目标不是生成复杂炫技代码，而是生成：

- 面试中能手写出来的代码
- 逻辑清晰、容易讲解的代码
- 能覆盖核心边界条件的代码
- 方便用户理解和复习的代码

---

## 2. When to Use

当执行以下任务时，必须遵守本 Spec：

- 新增手写代码题
- 新增算法题
- 修改已有 `handwriting` 分类题目
- 修改已有 `algorithm` 分类题目
- 给已有题目补充 `code` 字段
- 检查哪些题目缺少代码示例
- 优化已有代码题答案

---

## 3. Scope

### 3.1 必须包含 code 的分类

以下分类的题目，如果是代码实现类题目，必须包含 `code` 字段：

```ts
'handwriting'
'algorithm'