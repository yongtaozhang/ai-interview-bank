import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import EmptyState from '../components/common/EmptyState'
import FilterBar from '../components/filters/FilterBar'
import QuestionList from '../components/questions/QuestionList'
import { questions } from '../data/questions'
import { useQuestionSearch } from '../hooks/useQuestionSearch'
import type { QuestionCategory, QuestionDifficulty, QuestionFrequency } from '../types/question'
import {
  defaultQuestionFilters,
  hasActiveFilters as getHasActiveFilters,
  type QuestionFilters,
} from '../utils/questionFilters'

export default function QuestionsPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const categories = useMemo(
    () => Array.from(new Set(questions.map((question) => question.category))) as QuestionCategory[],
    [],
  )
  const keyword = searchParams.get('q') ?? ''
  const filters = useMemo<QuestionFilters>(() => {
    const category = searchParams.get('category')
    const difficulty = searchParams.get('difficulty')
    const frequency = searchParams.get('frequency')

    return {
      category: categories.includes(category as QuestionCategory)
        ? (category as QuestionCategory)
        : defaultQuestionFilters.category,
      difficulty: isQuestionDifficulty(difficulty)
        ? difficulty
        : defaultQuestionFilters.difficulty,
      frequency: isQuestionFrequency(frequency) ? frequency : defaultQuestionFilters.frequency,
    }
  }, [categories, searchParams])
  const filteredQuestions = useQuestionSearch(questions, filters, keyword)
  const hasActiveFilters = getHasActiveFilters(filters, keyword)

  function updateSearchParams(nextKeyword: string, nextFilters: QuestionFilters) {
    const nextSearchParams = new URLSearchParams()
    const trimmedKeyword = nextKeyword.trim()

    if (trimmedKeyword) {
      nextSearchParams.set('q', trimmedKeyword)
    }

    if (nextFilters.category !== 'all') {
      nextSearchParams.set('category', nextFilters.category)
    }

    if (nextFilters.difficulty !== 'all') {
      nextSearchParams.set('difficulty', nextFilters.difficulty)
    }

    if (nextFilters.frequency !== 'all') {
      nextSearchParams.set('frequency', nextFilters.frequency)
    }

    setSearchParams(nextSearchParams, { replace: true })
  }

  function resetFilters() {
    setSearchParams({}, { replace: true })
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
        onFiltersChange={(nextFilters) => updateSearchParams(keyword, nextFilters)}
        onKeywordChange={(nextKeyword) => updateSearchParams(nextKeyword, filters)}
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

function isQuestionDifficulty(value: string | null): value is QuestionDifficulty {
  return value === 'basic' || value === 'intermediate' || value === 'advanced'
}

function isQuestionFrequency(value: string | null): value is QuestionFrequency {
  return value === 'low' || value === 'medium' || value === 'high'
}
