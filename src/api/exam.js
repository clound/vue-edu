import { commonGet } from './base'
// 获取考试题目
export function getQuestion() {
  return commonGet('/getquestion')
}