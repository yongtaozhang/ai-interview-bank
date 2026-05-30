import { useMemo, useState } from 'react'
import EmptyState from '../components/common/EmptyState'
import FilterBar from '../components/filters/FilterBar'
import QuestionList from '../components/questions/QuestionList'
import { questions } from '../data/questions'
import { useQuestionSearch } from '../hooks/useQuestionSearch'
import type { QuestionCategory } from '../types/question'
import {
  defaultQuestionFilters,
  hasActiveFilters as getHasActiveFilters,
  type QuestionFilters,
} from '../utils/questionFilters'

export default function QuestionsPage() {
  const [keyword, setKeyword] = useState('')
  const [filters, setFilters] = useState<QuestionFilters>(defaultQuestionFilters)

  const categories = useMemo(
    () => Array.from(new Set(questions.map((question) => question.category))) as QuestionCategory[],
    [],
  )
  const filteredQuestions = useQuestionSearch(questions, filters, keyword)
  const hasActiveFilters = getHasActiveFilters(filters, keyword)

  function resetFilters() {
    setKeyword('')
    setFilters(defaultQuestionFilters)
  }

  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-950">题库</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          按分类、难度和高频程度筛选前端面试题，也可以直接搜索标题、标签、关键点和口述答案。
        </p>
      </div>

      <FilterBar
        categories={categories}
        filters={filters}
        hasActiveFilters={hasActiveFilters}
        keyword={keyword}
        onFiltersChange={setFilters}
        onKeywordChange={setKeyword}
        onReset={resetFilters}
      />

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-4 py-3">
        <p className="text-sm text-slate-600">
          共找到 <span className="font-semibold text-slate-950">{filteredQuestions.length}</span>{' '}
          道题目
        </p>
        {hasActiveFilters ? (
          <p className="text-sm text-slate-500">当前结果已应用搜索或筛选条件</p>
        ) : (
          <p className="text-sm text-slate-500">当前展示全部题目</p>
        )}
      </div>

      {filteredQuestions.length > 0 ? (
        <QuestionList questions={filteredQuestions} />
      ) : (
        <EmptyState
          description="可以尝试更换关键词，或清空分类、难度和高频程度筛选条件。"
          title="没有找到匹配的题目"
        />
      )}
    </section>
  )
}
