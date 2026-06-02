# Interview Handbook Content Skill

## Goal

为前端面试宝典项目持续补充高质量、结构化、适合口述的前端面试题。

本 Skill 用于约束 AI/Codex 在新增、修改、检查面试题内容时的行为，确保题目符合资深前端面试准备场景，而不是生成普通八股文或低质量题库内容。

---

## When to Use

当执行以下任务时，必须遵守本 Skill：

- 新增面试题
- 修改已有面试题
- 扩充 `src/data/questions.ts`
- 生成题目规划清单
- 补充题目的答案、关键点、追问、代码示例
- 检查题库质量
- 去重题库内容

## Code Comment Rule

When a question contains a `code` field, follow:

- `specs/10-code-inline-comment-spec.md`

Prefer inline comments inside the code instead of adding a separate `codeComment` field.

---

## Data Structure

每道题必须符合项目中的 `InterviewQuestion` 类型。

必填字段：

```ts
{
  id: string;
  title: string;
  category: QuestionCategory;
  level: QuestionLevel;
  frequency: 1 | 2 | 3 | 4 | 5;
  tags: string[];
  question: string;
  shortAnswer: string;
  oralAnswer: string;
  keyPoints: string[];
  followUps: string[];
  code?: string;
  scene?: string;
}