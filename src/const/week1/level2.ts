import { IDialog, EDialogType } from '../../types/IDialogs'

const seatOptions: Array<IDialog[]> = [
  [
    {
      type: EDialogType.DIALOG,
      content: '...'
    },
    {
      type: EDialogType.CHANGE_IMAGE,
      content: '/images/background/Classroom/SJ_Front.png'
    },
    {
      type: EDialogType.SEONG_JANG,
      content: '앞자리였다.'
    },
    {
      type: EDialogType.CHANGE_IMAGE,
      content: '/images/background/Classroom/Classroom.png'
    }
  ],
  [
    {
      type: EDialogType.DIALOG,
      content: '...'
    },
    {
      type: EDialogType.CHANGE_IMAGE,
      content: '/images/background/Classroom/SJ_Middle.png'
    },
    {
      type: EDialogType.SEONG_JANG,
      content: '중간자리였다.'
    },
    {
      type: EDialogType.CHANGE_IMAGE,
      content: '/images/background/Classroom/Classroom.png'
    }
  ],
  [
    {
      type: EDialogType.DIALOG,
      content: '...'
    },
    {
      type: EDialogType.CHANGE_IMAGE,
      content: '/images/background/Classroom/SJ_Back.png'
    },
    {
      type: EDialogType.SEONG_JANG,
      content: '뒤쪽 창가자리였다.'
    },
    {
      type: EDialogType.CHANGE_IMAGE,
      content: '/images/background/Classroom/Classroom.png'
    }
  ]
]

const conversationWithNewSeatmate: IDialog[] = [
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/Classroom/JJ_SJ.png'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '저기…'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/Classroom/JJ_SJ.png'
  },
  {
    type: EDialogType.OTHER,
    content: '응?',
    name: '짝꿍'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '내 이름은 김성장이야. 잘부탁해!'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/Classroom/JJ_SJ_YW.png'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '어? 성장아!'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '(뒤를 돌아본다.)'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '나는 네 뒷자리야! 잘부탁해!'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/Classroom/SJ_YW.png'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '기쁘다! 잘부탁해~'
  }
]

const borrowingSupplies: IDialog[] = [
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/Classroom/SJ_ExMark.png'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '(헉.. 오늘 필통을 안가져왔잖아? 어떻게 이런 실수를!)'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/Classroom/JJ_SJ_TT.png'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '저기 혹시.. 내가 오늘 필통을 두고 와서 그러는데 연필과 지우개를 빌릴 수 있을까?'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/Classroom/JJ_Er.png'
  },
  {
    type: EDialogType.OTHER,
    content: '응 그래 여기.',
    name: '짝꿍'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '고마워!'
  }
]

const mainDialog: IDialog[] = [
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/Classroom/CT_Default.png'
  },
  {
    type: EDialogType.OTHER,
    content:
      '자, 여러분. 그러면 오늘은 어제 말했던 것처럼 자리를 먼저 뽑도록 해볼게요. 선생님이 자리 번호표가 쓰여진 쪽지 통을 들고 다닐테니 하나씩 뽑아보세요.',
    name: '선생님'
  },
  {
    type: EDialogType.SELECTION,
    content: 'Q: 통에 있는 번호를 뽑는다.',
    selection: ['앞자리였다.', '중간자리였다.', '뒤쪽 창가자리였다.'],
    next: seatOptions,
    progress: 40
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '내가 원하는 자리로 갈 수 있어서 기쁘다!'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '옆 짝꿍이 정해진 듯하다. '
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '(터벅터벅) 자리로 이동하는 중.. '
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '(자리에 도착해보니 이미 짝꿍이 앉아있었다.)'
  },
  ...conversationWithNewSeatmate,
  {
    type: EDialogType.OTHER,
    content: '자, 그러면 한달동안 이렇게 앉는거로 하고 한달 뒤에 다시 짝꿍을 바꿀게요',
    name: '선생님'
  },
  ...borrowingSupplies
]

export default mainDialog
