import { useMemo } from 'react'
import type { InterviewQuestion } from '../types/question'
import { filterQuestions, type QuestionFilters } from '../utils/questionFilters'
import { searchQuestions } from '../utils/questionSearch'

export function useQuestionSearch(
  questions: InterviewQuestion[],
  filters: QuestionFilters,
  keyword: string,
) {
  return useMemo(() => {
    const filteredQuestions = filterQuestions(questions, filters)

    return searchQuestions(filteredQuestions, keyword)
  }, [filters, keyword, questions])
}
