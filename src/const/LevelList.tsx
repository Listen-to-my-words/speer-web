import { ILevel } from '../types/ILevels'

const levelList: [ILevel, ILevel] = [
  {
    image: '/images/01_week_thumbnail.png',
    week: 1,
    title: '성장이의 입학',
    subLevels: [
      {
        level: 1,
        title: '새 친구 사귀기'
      },
      {
        level: 2,
        title: '자리 정하기'
      },
      {
        level: 3,
        title: '취미 이야기하기'
      }
    ]
  },
  {
    image: '/images/02_week_thumbnail.png',
    week: 2,
    title: '성장이의 학교 생활',
    subLevels: [
      {
        level: 1,
        title: '준비물 사기'
      },
      {
        level: 2,
        title: '체육대회'
      },
      {
        level: 3,
        title: '반장이 되어보자'
      }
    ]
  }
]

// eslint-disable-next-line
export { levelList }
