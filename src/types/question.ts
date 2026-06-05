export type QuestionCategory =
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'browser'
  | 'handwriting'
  | 'algorithm'
  | 'network'
  | 'engineering'
  | 'performance'
  | 'css'
  | 'security'
  | 'architecture'
  | 'ai-coding'
  | 'project'

export type QuestionDifficulty = 'basic' | 'intermediate' | 'advanced'

export type QuestionFrequency = 'low' | 'medium' | 'high'

export interface FollowUpQuestion {
  question: string
  answerHint: string
}

export interface InterviewQuestion {
  id: string
  title: string
  summary: string
  shortAnswer: string
  category: QuestionCategory
  difficulty: QuestionDifficulty
  frequency: QuestionFrequency
  tags: string[]
  interviewerFocus: string[]
  answer: string
  oralAnswer: string
  detailedAnswer?: string
  keyPoints: string[]
  followUps: FollowUpQuestion[]
  relatedQuestionIds?: string[]
  code?: string
  scene?: string
}

export const categoryLabels: Record<QuestionCategory, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  browser: '浏览器',
  handwriting: '手写题',
  algorithm: '算法',
  network: '网络',
  engineering: '工程化',
  performance: '性能优化',
  css: 'CSS 与布局',
  security: '前端安全',
  architecture: '架构与项目经验',
  'ai-coding': 'AI Coding',
  project: '项目设计',
}

export const difficultyLabels: Record<QuestionDifficulty, string> = {
  basic: '基础',
  intermediate: '进阶',
  advanced: '高级',
}

export const frequencyLabels: Record<QuestionFrequency, string> = {
  low: '低频',
  medium: '中频',
  high: '高频',
}
