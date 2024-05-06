// eslint-disable-next-line no-shadow
export enum EDialogType {
  CHANGE_IMAGE = 'CHANGE_IMAGE',
  SEONG_JANG = 'SEONG_JANG',
  YOUNG_WON = 'YOUNG_WON',
  DIALOG = 'DIALOG'
}
export interface IDialog {
  type: EDialogType
  content: string
}
