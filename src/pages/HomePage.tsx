import { ArrowRight, Bot, Flame, Library, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { questions } from '../data/questions'
import { categoryLabels, type QuestionCategory } from '../types/question'

const featuredCategories: QuestionCategory[] = [
  'javascript',
  'typescript',
  'react',
  'browser',
  'network',
  'engineering',
  'performance',
  'architecture',
]

const highFrequencyQuestions = questions.filter((question) => question.frequency === 'high').slice(0, 4)

export default function HomePage() {
  return (
    <section className="flex flex-col gap-10">
      <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              前端资深面试速查 MVP
            </p>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl">
                AI 前端面试宝典
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                前端资深面试题的速查、口述答案和追问清单，帮助你按方向快速复习并组织可表达的答案。
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              to="/questions"
            >
              进入题库
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              to="/ai-coding"
            >
              <Bot className="h-4 w-4" aria-hidden="true" />
              查看 AI Coding 模板
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-blue-700 p-2 text-white">
              <Library className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-950">MVP 范围</p>
              <p className="text-sm text-blue-800">题库检索、详情查看、口述答案复制</p>
            </div>
          </div>
          <dl className="mt-5 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-md bg-white px-3 py-4">
              <dt className="text-xs font-medium text-slate-500">题目数</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-950">{questions.length}</dd>
            </div>
            <div className="rounded-md bg-white px-3 py-4">
              <dt className="text-xs font-medium text-slate-500">分类</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-950">{featuredCategories.length}</dd>
            </div>
            <div className="rounded-md bg-white px-3 py-4">
              <dt className="text-xs font-medium text-slate-500">高频</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-950">{highFrequencyQuestions.length}</dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="space-y-4" aria-labelledby="category-heading">
        <div>
          <h2 id="category-heading" className="text-2xl font-bold text-slate-950">
            主要知识分类
          </h2>
          <p className="mt-2 text-sm text-slate-600">按面试常见方向快速进入题库浏览。</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCategories.map((category) => (
            <Link
              className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              key={category}
              to="/questions"
            >
              <span className="text-sm font-semibold text-slate-950">{categoryLabels[category]}</span>
              <span className="mt-2 flex items-center text-sm text-slate-500 group-hover:text-blue-700">
                查看相关题目
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="high-frequency-heading">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 id="high-frequency-heading" className="text-2xl font-bold text-slate-950">
              高频题入口
            </h2>
            <p className="mt-2 text-sm text-slate-600">优先复习面试中更容易被追问的核心题目。</p>
          </div>
          <Flame className="hidden h-6 w-6 text-orange-500 sm:block" aria-hidden="true" />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {highFrequencyQuestions.map((question) => (
            <Link
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-orange-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              key={question.id}
              to={`/questions/${question.id}`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-700">
                  高频
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  {categoryLabels[question.category]}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-950">{question.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{question.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </section>
  )
}
