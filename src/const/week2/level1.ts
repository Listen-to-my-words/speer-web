import { IDialog, EDialogType } from '../../types/IDialogs'

const correctSelection: Array<IDialog> = [
  {
    type: EDialogType.YOUNG_WON,
    content: '아! 생각났다.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '맞아! 공책 한 권이랑 실내화 한 켤레를 사오라고 하셨었지.'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/store.jpg'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '연두색 공책으로 사야겠다. 아주머니. 이거 얼마에요?'
  },
  {
    type: EDialogType.OTHER,
    name: '문방구 아주머니',
    content: '공책은 한 권에 800원이고, 실내화 한 켤레는 2000원이야. 두 개 다 해서 2800원이란다.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '여기요. 아주머니. 감사합니다.'
  }
]

const incorrectSelection: Array<IDialog> = [
  {
    type: EDialogType.YOUNG_WON,
    content: '헷갈리네.. 알림장을 확인해야겠다.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '맞아! 공책 한 권이랑 실내화 한 켤레를 사오라고 하셨었지.'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/store.jpg'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '연두색 공책으로 사야겠다. 아주머니. 이거 얼마에요?'
  },
  {
    type: EDialogType.OTHER,
    name: '문방구 아주머니',
    content: '공책은 한 권에 800원이고, 실내화 한 켤레는 2000원이야. 두 개 다 해서 2800원이란다.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '여기요. 아주머니. 감사합니다.'
  }
]

const week2Level1: Array<IDialog> = [
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/classroom backboard.jpg'
  },
  {
    type: EDialogType.DIALOG,
    content: '(어제) -학교'
  },
  {
    type: EDialogType.OTHER,
    name: '선생님',
    content: '학교 생활에 필요한 준비물을 내일까지 사오도록 해요. 실내화 한 켤레, 공책 한 권을 사오면 돼요.'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: '/images/background/lane.jpg'
  },
  {
    type: EDialogType.DIALOG,
    content: '(오늘) - 골목길'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '문구점에서 준비물을 사서 가야겠다. 어제 선생님께서 뭘 사오라고 하셨더라? 분명 실내화 한 켤레랑..'
  },
  {
    type: EDialogType.SELECTION,
    content: '준비물이 뭐더라?',
    selection: ['연필 한 개', '공책 한 권', '지우개 한 개'],
    next: [incorrectSelection, correctSelection, incorrectSelection],
    progress: 60
  }
]

export default week2Level1
