import { IDialog, EDialogType } from '../../types/IDialogs'

const week1Level2Selection31 = [
  {
    type: EDialogType.YOUNG_WON,
    content: '저기 혹시.. 내가 오늘 필통을 두고 와서 그러는데 연필과 지우개를 빌릴 수 있을까?'
  },
  {
    type: EDialogType.OTHER,
    name: '짝꿍',
    content: '그래. 대신 이따가 화장실 같이 가자.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '응 그래 그러자.'
  }
]

const week1Level2Selection30 = [
  {
    type: EDialogType.YOUNG_WON,
    content: '저기 혹시.. 내가 오늘 필통을 두고 와서 그러는데 연필과 지우개를 빌릴 수 있을까?'
  },
  {
    type: EDialogType.OTHER,
    name: '짝꿍',
    content: '응 그래 여기.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '고마워!'
  }
]

const week1Level2AfterSelection2 = [
  {
    type: EDialogType.YOUNG_WON,
    content: '어? 성장아!'
  },
  {
    type: EDialogType.DIALOG,
    content: '돌아보니 뒤에는 영원이가 앉아있었다.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '나는 네 뒷자리야! 잘부탁해!'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '기쁘다! 잘부탁해'
  },
  {
    type: EDialogType.OTHER,
    name: '선생님',
    content: '자, 그러면 한달동안 이렇게 앉는거로 하고 한달 뒤에 다시 짝꿍을 바꿀게요.'
  },
  {
    type: EDialogType.DIALOG,
    content: '...'
  },
  {
    type: EDialogType.DIALOG,
    content: '(헉.. 오늘 필통을 안가져왔잖아? 어떻게 이런 실수를!)'
  },
  {
    type: EDialogType.SELECTION,
    content: '어떻게 할까?',
    selection: [
      '옆에 있는 짝꿍에게 말을 걸며 연필과 지우개를 빌려본다.',
      '뒤에 앉은 영원이에게 연필과 지우개를 빌려본다.'
    ],
    next: [week1Level2Selection30, week1Level2Selection31],
    progress: 80
  }
]

const week1Level2Selection21 = [
  {
    type: EDialogType.OTHER,
    name: '짝꿍',
    content: '안녕'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '응 안녕.'
  },
  {
    type: EDialogType.OTHER,
    name: '짝꿍',
    content: '나는 김짝꿍이라고 해. 잘부탁해'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '나는 김성장이야. 잘부탁해.',
    next: [week1Level2AfterSelection2]
  }
]

const week1Level2Selection20 = [
  {
    type: EDialogType.SEONG_JANG,
    content: '저기...'
  },
  {
    type: EDialogType.OTHER,
    name: '짝꿍',
    content: '응?'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '내 이름은 김성장이야. 잘부탁해!'
  },
  {
    type: EDialogType.OTHER,
    name: '짝꿍',
    content: '응 나는 김짝꿍이야. 잘부탁해.',
    next: [week1Level2AfterSelection2]
  }
]

const week1Level2AfterSelection1 = [
  {
    type: EDialogType.SELECTION,
    content: '짝꿍에게 먼저 말을',
    selection: ['걸어본다.', '걸지 않는다.'],
    next: [week1Level2Selection20, week1Level2Selection21],
    progress: 60
  }
]

const week1Level2Selection12 = [
  {
    type: EDialogType.DIALOG,
    content: '무서워보인다. 말을 못걸겠다.',
    next: [week1Level2AfterSelection1]
  }
]

const week1Level2Selection11 = [
  {
    type: EDialogType.DIALOG,
    content: '착해보인다. 친해질 수 있을 것 같다.',
    next: [week1Level2AfterSelection1]
  }
]

const week1Level2Selection10 = [
  {
    type: EDialogType.DIALOG,
    content: '똑똑해보인다. 모르는 것을 많이 알려줄 것 같다.',
    next: [week1Level2AfterSelection1]
  }
]

const week1Level2AfterSelection0 = [
  {
    type: EDialogType.DIALOG,
    content: '옆 짝꿍이 정해진 듯하다. '
  },
  {
    type: EDialogType.DIALOG,
    content: '자리로 이동하는 중...'
  },
  {
    type: EDialogType.DIALOG,
    content: '자리에 이동해보니 짝꿍이 이미 앉아있다.'
  },
  {
    type: EDialogType.SELECTION,
    content: '짝꿍은...?',
    selection: ['안경을 쓰고 책을 보고 있다.', '별 생각없이 창 밖을 보고 있다.', '엎드려서 자고 있다.'],
    next: [week1Level2Selection10, week1Level2Selection11, week1Level2Selection12],
    progress: 40
  }
]

const week1Level2Selection0 = [
  {
    type: EDialogType.DIALOG,
    content: '앞자리네? 선생님 수업에 집중할 수 있겠다.',
    next: [week1Level2AfterSelection0]
  }
]

const week1Level2Selection1 = [
  {
    type: EDialogType.DIALOG,
    content: '중간에 있는 자리네? 너무 치우치지 않은 것같아 만족스러워.',
    next: [week1Level2AfterSelection0]
  }
]

const week1Level2Selection2 = [
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/교실 책상.jpg'
  },
  {
    type: EDialogType.DIALOG,
    content: '뒤쪽에 있는 자리면 살짝 졸아도 선생님한테 안걸리겠다.',
    next: [week1Level2AfterSelection0]
  }
]

const week1Level2: Array<IDialog> = [
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/classroom backboard.jpg'
  },
  {
    type: EDialogType.OTHER,
    name: '선생님',
    content: '자, 여러분. 그러면 오늘은 어제 말했던 것처럼 자리를 먼저 뽑도록 해볼게요.'
  },
  {
    type: EDialogType.OTHER,
    name: '선생님',
    content: '선생님이 자리 번호표가 쓰여진 쪽지 통을 들고 다닐테니 하나씩 뽑아보세요.'
  },
  {
    type: EDialogType.SELECTION,
    content: '통에 있는 번호를 뽑는다.',
    selection: ['앞자리였다.', '중간자리였다.', '뒤쪽 창가자리였다.'],
    next: [week1Level2Selection0, week1Level2Selection1, week1Level2Selection2],
    progress: 20
  }
]

export default week1Level2
