import { IDialog, EDialogType } from '../../types/IDialogs'

const correctAnswer: IDialog[] = [
  {
    type: EDialogType.SEONG_JANG,
    content: '아! 생각났다.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '연두색 공책으로 사야겠다. 아주머니. 이거 얼마에요?'
  },
  {
    type: EDialogType.OTHER,
    content: '공책은 한 권에 800원이고, 실내화 한 켤레는 2000원이야. 두 개 다 해서 2800원이란다.',
    name: '문방구 아주머니'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '여기요. 아주머니. 감사합니다.'
  }
]

const incorrectAnswer: IDialog[] = [
  {
    type: EDialogType.SEONG_JANG,
    content: '헷갈리네.. 알림장을 확인해야겠다.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '맞아! 공책 한 권이랑 실내화 한 켤레를 사오라고 하셨었지.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '연두색 공책으로 사야겠다. 아주머니. 이거 얼마에요?'
  },
  {
    type: EDialogType.OTHER,
    content: '공책은 한 권에 800원이고, 실내화 한 켤레는 2000원이야. 두 개 다 해서 2800원이란다.',
    name: '문방구 아주머니'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '여기요. 아주머니. 감사합니다.'
  }
]

const mainDialog: IDialog[] = [
  {
    type: EDialogType.OTHER,
    content: '내일 팀별로 필요한 준비물을 내일까지 사오도록 해요. 색연필과 공책 한 권을 사오면 돼요.',
    name: '선생님'
  },
  {
    type: EDialogType.OTHER,
    content: '우리 집에서 문구점까지 너무 먼데 어쩌지…',
    name: '김짝궁'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '나도 내일 아침엔 문구점에 가기 어려운데..'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '그럼 내가 사올게! 얘들아.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '정말? 고마워~!'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '천만에!'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '문구점에서 준비물을 사서 가야겠다. 어제 선생님께서 뭘 사오라고 하셨더라? 분명 색연필이랑..'
  },
  {
    type: EDialogType.SELECTION,
    content: 'Q: 준비물이 뭐더라?',
    selection: ['연필 한 개', '공책 한 권', '지우개 한 개'],
    next: [incorrectAnswer, correctAnswer, incorrectAnswer],
    progress: 50
  }
]

export default mainDialog
