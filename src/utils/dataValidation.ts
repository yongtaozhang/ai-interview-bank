import type { InterviewQuestion } from '../types/question'

export function findDuplicateQuestionIds(questions: InterviewQuestion[]) {
  const seen = new Set<string>()
  const duplicates = new Set<string>()

  questions.forEach((question) => {
    if (seen.has(question.id)) {
      duplicates.add(question.id)
      return
    }

    seen.add(question.id)
  })

  return Array.from(duplicates)
}

export function findMissingRelatedQuestionIds(questions: InterviewQuestion[]) {
  const existingIds = new Set(questions.map((question) => question.id))
  const missingIds = new Set<string>()

  questions.forEach((question) => {
    question.relatedQuestionIds?.forEach((relatedQuestionId) => {
      if (!existingIds.has(relatedQuestionId)) {
        missingIds.add(relatedQuestionId)
      }
    })
  })

  return Array.from(missingIds)
}

export function validateQuestionsData(questions: InterviewQuestion[]) {
  return {
    duplicateIds: findDuplicateQuestionIds(questions),
    missingRelatedQuestionIds: findMissingRelatedQuestionIds(questions),
  }
}
