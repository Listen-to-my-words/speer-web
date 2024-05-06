import { ILevel } from '../types/ILevels'

const levelList: [ILevel, ILevel, ILevel, ILevel] = [
  {
    image: 'https://picsum.photos/200',
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
    image: 'https://picsum.photos/200',
    week: 2,
    title: '2주차',
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
    image: 'https://picsum.photos/200',
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
    image: 'https://picsum.photos/200',
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
