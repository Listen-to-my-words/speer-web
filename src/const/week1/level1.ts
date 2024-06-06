import { IDialog, EDialogType } from '../../types/IDialogs'

const talkWithSnack: IDialog[] = [
  {
    type: EDialogType.YOUNG_WON,
    content: '안녕 내 이름은 영원이야. 네 이름은 뭐야?'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '내 이름은 성장이야. 여기 간식 먹을래?'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '오 고마워'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '우리 앞으로 친하게 지내자'
  }
]

const wait: IDialog[] = [
  {
    type: EDialogType.SEONG_JANG,
    content: '(긴장되니까 일단 말을 걸지 말아보자)'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '안녕! 만나서 반가워. 나는 영원이라고 해. 너는 이름이 뭐야?'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '안녕 나는 성장이야'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '내 옆자리 앉아줘서 고마워'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '먼저 말 걸어줘서 고마워'
  }
]

const mainDialog: IDialog[] = [
  {
    type: EDialogType.SEONG_JANG,
    content: '(어디에 앉지? 어, 저기 자리가 비워져있네 옆자리 앉아야겠다)'
  },
  {
    type: EDialogType.SELECTION,
    content: 'Q : 어떻게 말을 걸까? a1 : 간식을 주며 말을 건다 / a2 : 일단 기다린다.',
    selection: ['간식을 주며 말을 건다', '일단 기다린다'],
    next: [talkWithSnack, wait],
    progress: 40
  }
]

export default mainDialog
