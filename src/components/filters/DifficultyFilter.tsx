import {
  difficultyLabels,
  type QuestionDifficulty,
} from '../../types/question'

const difficultyOptions: QuestionDifficulty[] = ['basic', 'intermediate', 'advanced']

interface DifficultyFilterProps {
  value: QuestionDifficulty | 'all'
  onChange: (value: QuestionDifficulty | 'all') => void
}

export default function DifficultyFilter({ value, onChange }: DifficultyFilterProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">难度</span>
      <select
        className="mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 shadow-sm outline-none transition hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        onChange={(event) => onChange(event.target.value as QuestionDifficulty | 'all')}
        value={value}
      >
        <option value="all">全部难度</option>
        {difficultyOptions.map((difficulty) => (
          <option key={difficulty} value={difficulty}>
            {difficultyLabels[difficulty]}
          </option>
        ))}
      </select>
    </label>
  )
}
