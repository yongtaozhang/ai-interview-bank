import {
  categoryLabels,
  type QuestionCategory,
} from '../../types/question'

interface CategoryFilterProps {
  categories: QuestionCategory[]
  value: QuestionCategory | 'all'
  onChange: (value: QuestionCategory | 'all') => void
}

export default function CategoryFilter({ categories, value, onChange }: CategoryFilterProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">分类</span>
      <select
        className="mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 shadow-sm outline-none transition hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        onChange={(event) => onChange(event.target.value as QuestionCategory | 'all')}
        value={value}
      >
        <option value="all">全部分类</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {categoryLabels[category]}
          </option>
        ))}
      </select>
    </label>
  )
}
