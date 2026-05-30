import { ArrowLeft, ArrowRight, HelpCircle, ListChecks, MessageSquareText, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import CopyButton from '../components/common/CopyButton'
import QuestionMeta from '../components/questions/QuestionMeta'
import { questions } from '../data/questions'
import type { FollowUpQuestion, InterviewQuestion } from '../types/question'

interface DetailSectionProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}

function DetailSection({ title, icon, children }: DetailSectionProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-2">
        <span className="text-blue-700">{icon}</span>
        <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function TextList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-slate-700" key={item}>
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function FollowUpList({ followUps }: { followUps: FollowUpQuestion[] }) {
  if (followUps.length === 0) {
    return <p className="text-sm text-slate-500">暂无追问。</p>
  }

  return (
    <div className="space-y-3">
      {followUps.map((followUp) => (
        <article className="rounded-md border border-slate-200 bg-slate-50 p-4" key={followUp.question}>
          <h3 className="text-sm font-semibold text-slate-950">{followUp.question}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{followUp.answerHint}</p>
        </article>
      ))}
    </div>
  )
}

function RelatedQuestions({ questions }: { questions: InterviewQuestion[] }) {
  if (questions.length === 0) {
    return <p className="text-sm text-slate-500">暂无关联题目。</p>
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {questions.map((question) => (
        <Link
          className="group rounded-md border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:bg-blue-50 active:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          key={question.id}
          to={`/questions/${question.id}`}
        >
          <h3 className="text-sm font-semibold text-slate-950">{question.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{question.summary}</p>
          <span className="mt-3 inline-flex items-center text-sm font-semibold text-blue-700 group-hover:text-blue-800">
            查看关联题
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  )
}

export default function QuestionDetailPage() {
  const { id } = useParams()
  const question = questions.find((item) => item.id === id)

  if (!question) {
    return (
      <section className="max-w-3xl">
        <Link
          className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-blue-700 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          to="/questions"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          返回题库
        </Link>
        <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-slate-950">没有找到这道题目</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            当前题目可能不存在，或题库数据中没有对应的 ID。可以返回题库重新选择。
          </p>
        </div>
      </section>
    )
  }

  const relatedQuestions = (question.relatedQuestionIds ?? [])
    .map((relatedId) => questions.find((item) => item.id === relatedId))
    .filter((item): item is InterviewQuestion => Boolean(item))

  return (
    <section className="mx-auto max-w-4xl space-y-6">
      <Link
        className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-blue-700 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        to="/questions"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        返回题库
      </Link>

      <header className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
        <QuestionMeta question={question} />
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-normal text-slate-950 sm:text-4xl">
          {question.title}
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">{question.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {question.tags.map((tag) => (
            <span className="rounded-md bg-slate-50 px-2.5 py-1 text-xs text-slate-500" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </header>

      <DetailSection
        icon={<Target className="h-5 w-5" aria-hidden="true" />}
        title="面试官考察点"
      >
        <TextList items={question.interviewerFocus} />
      </DetailSection>

      <DetailSection
        icon={<MessageSquareText className="h-5 w-5" aria-hidden="true" />}
        title="口述答案"
      >
        <div className="space-y-3">
          <div className="flex justify-start sm:justify-end">
            <CopyButton idleLabel="复制口述答案" text={question.answer} />
          </div>
          <p className="rounded-md border border-blue-100 bg-blue-50 p-4 text-base leading-8 text-slate-800">
            {question.answer}
          </p>
        </div>
      </DetailSection>

      <DetailSection icon={<ListChecks className="h-5 w-5" aria-hidden="true" />} title="关键点">
        <TextList items={question.keyPoints} />
      </DetailSection>

      <DetailSection icon={<HelpCircle className="h-5 w-5" aria-hidden="true" />} title="常见追问">
        <FollowUpList followUps={question.followUps} />
      </DetailSection>

      <DetailSection
        icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
        title="关联题目"
      >
        <RelatedQuestions questions={relatedQuestions} />
      </DetailSection>
    </section>
  )
}
