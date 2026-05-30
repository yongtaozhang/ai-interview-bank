import { RotateCcw } from 'lucide-react'
import type { QuestionCategory } from '../../types/question'
import type { QuestionFilters } from '../../utils/questionFilters'
import CategoryFilter from './CategoryFilter'
import DifficultyFilter from './DifficultyFilter'
import FrequencyFilter from './FrequencyFilter'
import SearchInput from './SearchInput'

interface FilterBarProps {
  categories: QuestionCategory[]
  filters: QuestionFilters
  keyword: string
  hasActiveFilters: boolean
  onKeywordChange: (value: string) => void
  onFiltersChange: (filters: QuestionFilters) => void
  onReset: () => void
}

export default function FilterBar({
  categories,
  filters,
  keyword,
  hasActiveFilters,
  onKeywordChange,
  onFiltersChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[minmax(18rem,1.6fr)_minmax(9rem,1fr)_minmax(8rem,0.9fr)_minmax(9rem,0.9fr)_auto] xl:items-end">
        <SearchInput onChange={onKeywordChange} value={keyword} />
        <CategoryFilter
          categories={categories}
          onChange={(category) => onFiltersChange({ ...filters, category })}
          value={filters.category}
        />
        <DifficultyFilter
          onChange={(difficulty) => onFiltersChange({ ...filters, difficulty })}
          value={filters.difficulty}
        />
        <FrequencyFilter
          onChange={(frequency) => onFiltersChange({ ...filters, frequency })}
          value={filters.frequency}
        />
        <button
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 active:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2 xl:col-span-1"
          disabled={!hasActiveFilters}
          onClick={onReset}
          type="button"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          清空
        </button>
      </div>
    </div>
  )
}
