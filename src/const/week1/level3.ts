import { IDialog, EDialogType } from '../../types/IDialogs'

const hobbySelection1: Array<IDialog> = [
  {
    type: EDialogType.YOUNG_WON,
    content: '난 그림 그리는 걸 좋아해. 그 중에서 동물 그림 그리는 게 제일 재밌어.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '내 취미도 알려 줄게. 나는 아이돌 춤 추는 걸 좋아해.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '우와 멋지다. 다음에 춤 추는 거 보여주라.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '좋아! 약속할게.'
  }
]

const hobbySelection2: Array<IDialog> = [
  {
    type: EDialogType.YOUNG_WON,
    content: '난 운동을 좋아해. 그 중에서 축구를 가장 좋아해.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '내 취미도 알려 줄게. 나는 아이돌 춤 추는 걸 좋아해.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '우와 멋지다. 다음에 춤 추는 거 보여주라.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '좋아! 약속할게.'
  }
]

const hobbySelection3: Array<IDialog> = [
  {
    type: EDialogType.YOUNG_WON,
    content: '영화 보는 걸 좋아해. 그 중에서 로맨스 영화를 가장 좋아해.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '내 취미도 알려 줄게. 나는 아이돌 춤 추는 걸 좋아해.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '우와 멋지다. 다음에 춤 추는 거 보여주라.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '좋아! 약속할게.'
  }
]

const week1Level3: Array<IDialog> = [
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/classroom backboard.jpg'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '성장아! 같이 하교하자. 집까지 얼마나 걸려?'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '정문에서 왼쪽으로 돌면 금방이야.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '나랑 같은 방향이구나! 같이 가자! 영원이는 집에 가서 자유 시간을 어떻게 보내?'
  },
  {
    type: EDialogType.SELECTION,
    content: '취미가 뭐야?',
    selection: ['그림 그리기', '운동하기', '영화 보기'],
    next: [hobbySelection1, hobbySelection2, hobbySelection3],
    progress: 60
  }
]

export default week1Level3
