import { IDialog, EDialogType } from '../../types/IDialogs'

const cheer: Array<IDialog> = [
  {
    type: EDialogType.YOUNG_WON,
    content: '(우리 반 대표로 나갔다가 지면 어떡하지? 2인3각 안해봐서 자신이 없다. 그냥 열심히 응원해야지!)'
  },
  {
    type: EDialogType.DIALOG,
    content: '다음날'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/cheering seats.jpg'
  },
  {
    type: EDialogType.OTHER,
    name: '선생님',
    content: '즐거운 체육대회 날이에요! 우리 모두 재밌게 즐겨보아요.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '우리 반! 이겨라! 파이팅! 할 수 있다!'
  },
  {
    type: EDialogType.DIALOG,
    content: '응원이 과열된다.'
  }
]

const race: Array<IDialog> = [
  {
    type: EDialogType.DIALOG,
    content: '다음날'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/cheering seats.jpg'
  },
  {
    type: EDialogType.OTHER,
    name: '선생님',
    content: '즐거운 체육대회 날이에요! 우리 모두 다치지 말고 재밌게 즐겨보아요.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '(긴장되지만 우리 반 대표인 만큼 최선을 다해서 꼭 우승해야지!) 영원아 우리 힘내보자!'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '그래 파이팅!'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/운동장 트랙.jpg'
  },
  {
    type: EDialogType.DIALOG,
    content: '2인3각 중'
  }
]

const chooseToRace: Array<IDialog> = [
  {
    type: EDialogType.SEONG_JANG,
    content: '(해보지 뭐)'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '성장아 우리 힘내서 꼭 1등 하자!'
  },
  {
    type: EDialogType.OTHER,
    name: '선생님',
    content: '우리 반 2인3각 대표로 성장이가 나가기로 했어요! 모두 성장이와 영원이를 위해 박수 쳐요.'
  },
  {
    type: EDialogType.DIALOG,
    content: '짝짝'
  },
  ...race
]

const week2Level2: Array<IDialog> = [
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/classroom backboard.jpg'
  },
  {
    type: EDialogType.OTHER,
    name: '선생님',
    content: '내일은 체육대회 날이에요. 운동 종목으로 농구, 축구, 달리기, 2인3각을 할 예정이에요.'
  },
  {
    type: EDialogType.OTHER,
    name: '선생님',
    content: '혹시 우리 반 대표로 2인3각을 하고 싶은 친구 있나요? 있다면 알려주세요.'
  },
  {
    type: EDialogType.OTHER,
    name: '선생님',
    content: '대표로 나가지 않는 친구는 열심히 응원해요!'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '(잠시 고민하다가) 영원아! 우리 같이 2인3각 해볼래?'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '(머리 긁으며) 아하. 좋아하기는 하는데... 내가 잘할 수 있을까?'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '그럼! 우리 함께라면 할 수 있어.'
  },
  {
    type: EDialogType.SELECTION,
    content: 'a1 : 영원이와 우리 반 2인3각 대표로 나간다. a2 : 열심히 응원한다.',
    selection: ['영원이와 우리 반 2인3각 대표로 나간다.', '열심히 응원한다.'],
    next: [chooseToRace, cheer],
    progress: 60
  }
]

export default week2Level2
