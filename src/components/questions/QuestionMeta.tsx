import {
  categoryLabels,
  difficultyLabels,
  frequencyLabels,
  type InterviewQuestion,
} from '../../types/question'

interface QuestionMetaProps {
  question: InterviewQuestion
}

export default function QuestionMeta({ question }: QuestionMetaProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
        {categoryLabels[question.category]}
      </span>
      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
        {difficultyLabels[question.difficulty]}
      </span>
      <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700">
        {frequencyLabels[question.frequency]}
      </span>
    </div>
  )
}
