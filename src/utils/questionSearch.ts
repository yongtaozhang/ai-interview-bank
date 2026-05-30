import Fuse from 'fuse.js'
import type { InterviewQuestion } from '../types/question'

const fuseOptions = {
  keys: ['title', 'summary', 'tags', 'category', 'answer', 'keyPoints'],
  threshold: 0.35,
  ignoreLocation: true,
}

export function searchQuestions(
  questions: InterviewQuestion[],
  keyword: string,
): InterviewQuestion[] {
  const normalizedKeyword = keyword.trim()

  if (!normalizedKeyword) {
    return questions
  }

  const fuse = new Fuse(questions, fuseOptions)

  return fuse.search(normalizedKeyword).map((result) => result.item)
}
