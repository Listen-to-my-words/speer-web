import { IDialog, EDialogType } from '../../types/IDialogs'

const mainDialog: IDialog[] = [
  {
    type: EDialogType.OTHER,
    content:
      '오늘 반장 선거를 하는 날이에요. 반장은 반에서 친구들을 도와주고 반을 대표하는 친구를 의미해요. 선거에 나온 친구들의 공약을 들은 후 반장에 어울리는 친구를 투표해서 가장 표가 많이 나온 친구가 반장이 되는 거에요. 혹시 반장이 되고 싶은 사람 있나요?',
    name: '선생님'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '저요. 제가 저희 반 반장이 되었으면 좋겠습니다!'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '네 좋아요. 짝꿍이 말고 또 다른 친구 없나요?'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '저는 성장이가 반장을 하면 좋겠습니다.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '조금 떨리지만 나가볼까?',
    selection: ['반장 선거에 나간다'],
    next: [
      [
        {
          type: EDialogType.OTHER,
          content:
            '우리 반 반장 후보로 짝꿍이와 성장이가 나오게 되었어요. 그럼 짝꿍이부터 반장이 되면 어떤 반을 만들지 얘기해줄래?',
          name: '선생님'
        }
      ]
    ]
  },
  {
    type: EDialogType.OTHER,
    content: '이상한 반을 만들겠습니다.',
    name: '짝꿍이'
  },
  {
    type: EDialogType.OTHER,
    content: '성장이는 반장이 되면 어떤 반을 만들지 얘기해줄래?',
    name: '선생님'
  },
  {
    type: EDialogType.SELECTION,
    content: '어떤 반을 만들까?',
    selection: ['사이좋은 우리반', '깨끗한 우리반', '건강한 우리반'],
    next: [
      [
        {
          type: EDialogType.SEONG_JANG,
          content: '친구들의 고민을 들어주는 고민 상자를 만들겠습니다!'
        }
      ],
      [
        {
          type: EDialogType.SEONG_JANG,
          content: '매일 아침 먼저 학교에 와서 청소를 하겠습니다!'
        }
      ],
      [
        {
          type: EDialogType.SEONG_JANG,
          content: '1교시 전, 아침 체조를 진행하겠습니다!'
        }
      ]
    ]
  },
  {
    type: EDialogType.OTHER,
    content:
      '지금까지 짝꿍이와 성장이의 공약을 들어보았어요. 이제부터 투표를 시작할게요. 반장에 어울리는 친구의 이름을 적어서 투표 바구니에 넣어주세요. 투표는 비밀로 진행되니 편하게 쓰면 됩니다.',
    name: '선생님'
  },
  {
    type: EDialogType.OTHER,
    content: '우리 반의 반장은 ‘성장이’가 되었어요~! 축하합니다.',
    name: '선생님'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '얘들아 ~ 고마워~ 열심히 할게.'
  }
]

export default mainDialog
