import { IDialog, EDialogType } from '../types/IDialogs'

const week1Level1Select0: Array<IDialog> = [
  {
    type: EDialogType.DIALOG,
    content: '용기내서 말을 걸어보자'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '안녕 반가워 너는 이름이 뭐야?'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '나는 영원이야. 네 이름은 뭐야?'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '나는 성장이야. 여기 간식 먹을래?'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '고마워! 잘 먹을게'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '우리 앞으로 친하게 지내자'
  }
]

const week1Level1Select1: Array<IDialog> = [
  {
    type: EDialogType.DIALOG,
    content: '너무 긴장 돼. 일단 가만히 있어보자.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '안녕, 만나서 반가워. 나는 영원이라고 해.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '네 이름은 뭐야?'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '안녕, 나는 성장이야.'
  },
  {
    type: EDialogType.YOUNG_WON,
    content: '내 옆자리 앉아줘서 고마워.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '먼저 말 걸어줘서 고마워.'
  },
  {
    type: EDialogType.SEONG_JANG,
    content: '앞으로 친하게 지내자.'
  }
]

export const week1Level1: Array<IDialog> = [
  {
    type: EDialogType.CHANGE_IMAGE,
    content: 'https://picsum.photos/id/25/200/300'
  },
  {
    type: EDialogType.DIALOG,
    content: '오늘은 등교 첫날이다.'
  },
  {
    type: EDialogType.DIALOG,
    content: '어디에 앉지?'
  },
  {
    type: EDialogType.CHANGE_IMAGE,
    content: 'https://picsum.photos/id/10/200/300'
  },
  {
    type: EDialogType.DIALOG,
    content: '어, 저기 자리가 비워져있네 옆자리 앉아야겠다'
  },
  {
    type: EDialogType.SELECTION,
    content: '어떻게 말을 걸까?',
    selection: ['앉는다', '앉지 않는다'],
    next: [week1Level1Select0, week1Level1Select1],
    progress: 50
  }
]

export const weekList1: [Array<IDialog>, Array<IDialog>, Array<IDialog>] = [week1Level1, week1Level1, week1Level1]

export const dialogList: [
  [Array<IDialog>, Array<IDialog>, Array<IDialog>],
  [Array<IDialog>, Array<IDialog>, Array<IDialog>],
  [Array<IDialog>, Array<IDialog>, Array<IDialog>],
  [Array<IDialog>, Array<IDialog>, Array<IDialog>]
] = [weekList1, weekList1, weekList1, weekList1]
