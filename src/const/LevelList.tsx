import { ILevel } from '../types/ILevels'

const levelList: [ILevel, ILevel, ILevel, ILevel] = [
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
        title: '체육대회 준비하기'
      },
      {
        level: 3,
        title: '체육대회 참가하기'
      }
    ]
  },
  {
    image: '/images/03_week_thumbnail.png',
    week: 3,
    title: '3주차',
    subLevels: [
      {
        level: 1,
        title: '1단계'
      },
      {
        level: 2,
        title: '2단계'
      },
      {
        level: 3,
        title: '3단계'
      }
    ]
  },
  {
    image: '/images/04_week_thumbnail.png',
    week: 4,
    title: '4주차',
    subLevels: [
      {
        level: 1,
        title: '1단계'
      },
      {
        level: 2,
        title: '2단계'
      },
      {
        level: 3,
        title: '3단계'
      }
    ]
  }
]

// eslint-disable-next-line
export { levelList }
