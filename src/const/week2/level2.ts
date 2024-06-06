import { IDialog, EDialogType } from '../../types/IDialogs'

const sportsChoices: IDialog[] = [
  {
    type: EDialogType.SELECTION,
    content: 'Q: 어떤 종목을 선택할까?',
    selection: ['축구', '농구', '달리기', '멀리뛰기'],
    next: [
      [
        {
          type: EDialogType.SEONG_JANG,
          content: '내가 가장 잘하는 운동인 축구를 선택해야지!'
        }
      ],
      [
        {
          type: EDialogType.SEONG_JANG,
          content: '요즘 농구에 관심이 가니까 농구를 선택해야지!'
        }
      ],
      [
        {
          type: EDialogType.SEONG_JANG,
          content: '난 달리기에 자신이 있으니까 달리기를 선택해야지!'
        }
      ],
      [
        {
          type: EDialogType.SEONG_JANG,
          content: '멀리뛰기 한번도 해보지 않았지만 재밌어 보이네. 멀리뛰기 선택해야지!'
        }
      ]
    ],
    progress: 40
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '좋아. 나 자신 있어! 우리 열심히 해서 꼭 우승하자!'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '그래. 긴장되지만 너와 함께라면 할 수 있을 것 같아.'
  },
  {
    type: EDialogType.OTHER,
    content:
      '다 정했나요? 내일 즐거운 체육대회를 하기 위해서 가장 중요한 점은 다치지 않는 것이에요. 우리 반 소중한 추억 만들어보아요.',
    name: '선생님'
  }
]

const injuryScenario: IDialog[] = [
  {
    type: EDialogType.OTHER,
    content: '즐거운 체육대회 날이에요! 우리 모두 재밌게 즐겨보아요.',
    name: '선생님'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '우리 반! 이겨라! 파이팅! 할 수 있다!'
  },
  {
    type: EDialogType.DIALOG,
    content: 'B가 넘어짐. 쿠당탕-'
  },
  {
    type: EDialogType.DIALOG,
    content: '탁탁탁-'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: 'B야 괜찮아?!'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '아, 조금 피가 나긴하는데 크게 다친건 아니야 나 좀 도와줄래?'
  },
  {
    type: EDialogType.OTHER,
    content: '성장아! 지금 B가 많이 다쳤는데 같이 보건실 같이 가줄래? 선생님은 반 친구들과 함께 있어야하니까',
    name: '담임 선생님'
  }
]

const nurseScenario: IDialog[] = [
  {
    type: EDialogType.DIALOG,
    content: '보건실 앞'
  },
  {
    type: EDialogType.SELECTION,
    content: 'Q: 어떻게 할까?',
    selection: ['노크를 한다.'],
    next: [
      [
        {
          type: EDialogType.OTHER,
          content: '무슨일로 왔니?',
          name: '보건실 선생님'
        }
      ]
    ],
    progress: 60
  },
  {
    type: EDialogType.SELECTION,
    content: '선생님께 영원이의 상태를 대신 말씀드려보자',
    selection: ['영원이가 다리에서 넘어져서 피가 많이 나요.', '영원이가 넘어져서 다리에서 피가 많이 나요.'],
    next: [
      [
        {
          type: EDialogType.SEONG_JANG,
          content: '영원이가 다리에서 넘어져서 피가 많이 나요.'
        }
      ],
      [
        {
          type: EDialogType.SEONG_JANG,
          content: '영원이가 넘어져서 다리에서 피가 많이 나요.'
        }
      ]
    ],
    progress: 80
  },
  {
    type: EDialogType.OTHER,
    content: '큰일이구나. 많이 아프지는 않니?',
    name: '보건실 선생님'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '넘어져서 다리와 팔이 아파요.'
  },
  {
    type: EDialogType.OTHER,
    content: '우선 간단하게 치료를 해줄테니 학교 끝나고 병원을 가보도록 하렴.',
    name: '보건실 선생님'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '네'
  },
  {
    type: EDialogType.DIALOG,
    content: '- 치료중 -'
  },
  {
    type: EDialogType.OTHER,
    content: '조심히 걸어가렴',
    name: '보건실 선생님'
  },
  {
    type: EDialogType.DIALOG,
    content: '드르륵 탁'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '성장아 너 덕분에 보건실에 잘 다녀왔어 고마워'
  },
  {
    type: EDialogType.SELECTION,
    content: '어떻게 답할까?',
    selection: ['아니야 이정도로 뭘.', '도움이 되어서 다행이다.'],
    next: [
      [
        {
          type: EDialogType.SEONG_JANG,
          content: '아니야 이정도로 뭘.'
        }
      ],
      [
        {
          type: EDialogType.SEONG_JANG,
          content: '도움이 되어서 다행이다.'
        }
      ]
    ],
    progress: 100
  }
]

const mainDialog: IDialog[] = [
  {
    type: EDialogType.OTHER,
    content:
      '내일은 체육대회 날이에요. 운동 종목으로 농구, 축구, 달리기, 멀리뛰기가 있어요. 우리 반 대표로 나와서 하고 싶은 종목이 있나요?',
    name: '선생님'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '성장아 우리도 반 대표로 체육대회 참여할래?'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '좋아. 어떤 종목이 좋을까?'
  },
  ...sportsChoices,
  ...injuryScenario,
  ...nurseScenario
]

export default mainDialog
