import { IQuiz } from '../types/IQuiz'

const week1Quiz: Array<IQuiz> = [
  {
    question: '처음 만났을 때 하는 인사는?',
    answer: 2,
    options: ['고마워', '내 이름은 성장이야.', '안녕 반가워', '너는 이름이 뭐야?']
  },
  {
    question: '빈칸에 들어갈 말은?\n내 이름은 _________ 이야.',
    answer: 2,
    options: ['간식', '고마워', '성장이', '만나서 반가워']
  },
  {
    question: '다음 중 취미를 물어보는 질문은?',
    answer: 1,
    options: ['오늘 급식 뭐야?', '취미가 뭐야?', '어서오세요.', '이름이 뭐야?']
  },
  {
    question: '취미를 이야기할 때 맞는 대답은?',
    answer: 2,
    options: ['난 수박을 좋아해', '같이 하교하자', '난 게임을 좋아해', '오랜만이야']
  }
]

const week2Quiz: Array<IQuiz> = [
  {
    question: '가격을 묻는 표현은?',
    answer: 2,
    options: ['배고파요.', '다녀오겠습니다.', '얼마에요?', '맛있겠다.']
  }
]

const quizList: Array<Array<IQuiz>> = [week1Quiz, week2Quiz]

export default quizList
