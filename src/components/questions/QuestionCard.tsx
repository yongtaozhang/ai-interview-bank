import { ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import type { InterviewQuestion } from '../../types/question'
import QuestionMeta from './QuestionMeta'

interface QuestionCardProps {
  question: InterviewQuestion
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const location = useLocation()

  return (
    <Link
      className="group block h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      to={{ pathname: `/questions/${question.id}`, search: location.search }}
    >
      <QuestionMeta question={question} />
      <h2 className="mt-4 text-lg font-semibold leading-7 text-slate-950">{question.title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{question.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {question.tags.slice(0, 4).map((tag) => (
          <span className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-500" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 group-hover:text-blue-800">
        查看详情
        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  )
}
