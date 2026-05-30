# AI 前端面试宝典

一个基于 React + Vite + TypeScript 的前端面试题速查 MVP，用于快速检索不同方向的前端面试题、查看口述答案、关键点和追问，并展示 AI Coding / Codex Prompt 模板。

## MVP 功能

- 首页：项目介绍、题库入口、AI Coding 入口、分类入口和高频题入口。
- 题库页：题目列表、关键词搜索、分类筛选、难度筛选、高频程度筛选、清空筛选和空状态。
- 题目详情页：题目元信息、面试官考察点、口述答案、关键点、常见追问、关联题目和复制口述答案。
- AI Coding 页面：按场景展示 Codex Prompt 模板，并支持复制模板。

## 技术栈

- React
- Vite
- TypeScript
- React Router
- Tailwind CSS
- Fuse.js
- Lucide React

## 本地开发

```bash
npm install
npm run dev -- --host 127.0.0.1
```

## 验证命令

```bash
npm run lint
npm run build
```

## 主要路由

- `/`：首页
- `/questions`：题库页
- `/questions/:id`：题目详情页
- `/ai-coding`：AI Coding 页面
