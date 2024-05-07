import { IDialog, EDialogType } from '../types/IDialogs'

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
  }
]

export const weekList1: [Array<IDialog>, Array<IDialog>, Array<IDialog>] = [week1Level1, week1Level1, week1Level1]

export const dialogList: [
  [Array<IDialog>, Array<IDialog>, Array<IDialog>],
  [Array<IDialog>, Array<IDialog>, Array<IDialog>],
  [Array<IDialog>, Array<IDialog>, Array<IDialog>],
  [Array<IDialog>, Array<IDialog>, Array<IDialog>]
] = [weekList1, weekList1, weekList1, weekList1]
