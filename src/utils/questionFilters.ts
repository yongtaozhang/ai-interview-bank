import type {
  InterviewQuestion,
  QuestionCategory,
  QuestionDifficulty,
  QuestionFrequency,
} from '../types/question'

export interface QuestionFilters {
  category: QuestionCategory | 'all'
  difficulty: QuestionDifficulty | 'all'
  frequency: QuestionFrequency | 'all'
}

export const defaultQuestionFilters: QuestionFilters = {
  category: 'all',
  difficulty: 'all',
  frequency: 'all',
}

export function filterQuestions(
  questions: InterviewQuestion[],
  filters: QuestionFilters,
): InterviewQuestion[] {
  return questions.filter((question) => {
    const matchesCategory = filters.category === 'all' || question.category === filters.category
    const matchesDifficulty =
      filters.difficulty === 'all' || question.difficulty === filters.difficulty
    const matchesFrequency = filters.frequency === 'all' || question.frequency === filters.frequency

    return matchesCategory && matchesDifficulty && matchesFrequency
  })
}

export function hasActiveFilters(filters: QuestionFilters, keyword: string) {
  return (
    keyword.trim().length > 0 ||
    filters.category !== 'all' ||
    filters.difficulty !== 'all' ||
    filters.frequency !== 'all'
  )
}
