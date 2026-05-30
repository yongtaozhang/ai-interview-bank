import type { InterviewQuestion } from '../../types/question'
import QuestionCard from './QuestionCard'

interface QuestionListProps {
  questions: InterviewQuestion[]
}

export default function QuestionList({ questions }: QuestionListProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  )
}
