#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const questionsPath = path.join(rootDir, 'src/data/questions.ts')

const EXPECTED_TOTAL = 116
const EXPECTED_CATEGORY_COUNTS = {
  react: 18,
  typescript: 10,
  performance: 10,
  engineering: 10,
  browser: 8,
  handwriting: 14,
  algorithm: 8,
  ai: 20,
  'ai-coding': 8,
  project: 10,
}

const REQUIRED_FIELDS = [
  'id',
  'title',
  'category',
  'difficulty',
  'frequency',
  'tags',
  'interviewerFocus',
  'keyPoints',
  'followUps',
]

function loadQuestions() {
  const rawSource = fs.readFileSync(questionsPath, 'utf8')
  const executableSource = rawSource
    .replace(/^import type .+\n/m, '')
    .replace('export const questions: InterviewQuestion[] =', 'const questions =')
    .replace(
      /}\s+as\s+unknown\s+as\s+InterviewQuestion\s+&\s+\{\s+\w+:\s+string\s+\},/g,
      '},',
    )

  return vm.runInNewContext(`${executableSource}\nquestions`, Object.create(null), {
    filename: questionsPath,
    timeout: 1000,
  })
}

function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '') ||
    (Array.isArray(value) && value.length === 0)
  )
}

function formatIds(ids, limit = 20) {
  if (ids.length === 0) {
    return ''
  }

  const visibleIds = ids.slice(0, limit).join(', ')
  const suffix = ids.length > limit ? `, ... +${ids.length - limit}` : ''
  return ` (${visibleIds}${suffix})`
}

function addGroupedError(errors, message, ids = []) {
  errors.push(`${message}${formatIds(ids)}`)
}

function validateQuestions(questions) {
  const errors = []
  const categoryCounts = new Map()
  const idCounts = new Map()
  const missingFields = new Map()
  const missingShortAnswerIds = []
  const missingOralAnswerIds = []
  const invalidKeyPointsIds = []
  const invalidFollowUpsIds = []
  const missingHandwritingCodeIds = []
  const missingProjectSceneIds = []

  if (!Array.isArray(questions)) {
    return {
      errors: ['questions 必须是数组'],
      categoryCounts: {},
    }
  }

  for (const [index, question] of questions.entries()) {
    const fallbackId = `#${index + 1}`
    const id = typeof question?.id === 'string' && question.id.trim() ? question.id : fallbackId

    idCounts.set(id, (idCounts.get(id) ?? 0) + 1)

    const category = question?.category
    if (typeof category === 'string' && category.trim()) {
      categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1)
    }

    for (const field of REQUIRED_FIELDS) {
      if (isEmpty(question?.[field])) {
        const ids = missingFields.get(field) ?? []
        ids.push(id)
        missingFields.set(field, ids)
      }
    }

    if (isEmpty(question?.shortAnswer)) {
      missingShortAnswerIds.push(id)
    }

    if (isEmpty(question?.oralAnswer)) {
      missingOralAnswerIds.push(id)
    }

    if (!Array.isArray(question?.keyPoints) || question.keyPoints.length < 3 || question.keyPoints.length > 6) {
      invalidKeyPointsIds.push(id)
    }

    if (!Array.isArray(question?.followUps) || question.followUps.length < 2 || question.followUps.length > 4) {
      invalidFollowUpsIds.push(id)
    }

    if (category === 'handwriting' && isEmpty(question?.code)) {
      missingHandwritingCodeIds.push(id)
    }

    if (category === 'project' && isEmpty(question?.scene)) {
      missingProjectSceneIds.push(id)
    }
  }

  if (questions.length !== EXPECTED_TOTAL) {
    errors.push(`总题数应为 ${EXPECTED_TOTAL}，实际 ${questions.length}`)
  }

  for (const [category, expectedCount] of Object.entries(EXPECTED_CATEGORY_COUNTS)) {
    const actualCount = categoryCounts.get(category) ?? 0
    if (actualCount !== expectedCount) {
      errors.push(`${category} 分类应为 ${expectedCount} 道，实际 ${actualCount} 道`)
    }
  }

  for (const [category, count] of categoryCounts.entries()) {
    if (!(category in EXPECTED_CATEGORY_COUNTS)) {
      errors.push(`不应存在 category "${category}"，实际 ${count} 道`)
    }
  }

  const duplicateIds = [...idCounts.entries()]
    .filter(([, count]) => count > 1)
    .map(([id]) => id)

  if (duplicateIds.length > 0) {
    addGroupedError(errors, '存在重复 id', duplicateIds)
  }

  for (const [field, ids] of missingFields.entries()) {
    addGroupedError(errors, `${field} 缺失或为空，共 ${ids.length} 道`, ids)
  }

  if (missingShortAnswerIds.length > 0) {
    addGroupedError(errors, `shortAnswer 缺失或为空，共 ${missingShortAnswerIds.length} 道`, missingShortAnswerIds)
  }

  if (missingOralAnswerIds.length > 0) {
    addGroupedError(errors, `oralAnswer 缺失或为空，共 ${missingOralAnswerIds.length} 道`, missingOralAnswerIds)
  }

  if (invalidKeyPointsIds.length > 0) {
    addGroupedError(errors, `keyPoints 数量必须为 3-6 条，共 ${invalidKeyPointsIds.length} 道不符合`, invalidKeyPointsIds)
  }

  if (invalidFollowUpsIds.length > 0) {
    addGroupedError(errors, `followUps 数量必须为 2-4 条，共 ${invalidFollowUpsIds.length} 道不符合`, invalidFollowUpsIds)
  }

  if (missingHandwritingCodeIds.length > 0) {
    addGroupedError(errors, `handwriting 题目必须包含 code，共 ${missingHandwritingCodeIds.length} 道不符合`, missingHandwritingCodeIds)
  }

  if (missingProjectSceneIds.length > 0) {
    addGroupedError(errors, `project 题目必须包含 scene，共 ${missingProjectSceneIds.length} 道不符合`, missingProjectSceneIds)
  }

  return {
    errors,
    categoryCounts: Object.fromEntries([...categoryCounts.entries()].sort()),
  }
}

try {
  const questions = loadQuestions()
  const { errors, categoryCounts } = validateQuestions(questions)

  console.log(`题库总数: ${Array.isArray(questions) ? questions.length : '无法读取'}`)
  console.log('分类统计:')

  for (const category of Object.keys(EXPECTED_CATEGORY_COUNTS)) {
    console.log(`- ${category}: ${categoryCounts[category] ?? 0}`)
  }

  for (const [category, count] of Object.entries(categoryCounts)) {
    if (!(category in EXPECTED_CATEGORY_COUNTS)) {
      console.log(`- ${category}: ${count}`)
    }
  }

  if (errors.length > 0) {
    console.error('\n题库校验失败:')
    for (const error of errors) {
      console.error(`- ${error}`)
    }
    process.exitCode = 1
  } else {
    console.log('\n题库校验通过')
  }
} catch (error) {
  console.error('题库校验脚本执行失败:')
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
}
