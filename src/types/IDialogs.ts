// eslint-disable-next-line
export enum EDialogType {
  CHANGE_IMAGE = 'CHANGE_IMAGE',
  SEONG_JANG = 'SEONG_JANG',
  YOUNG_WON = 'YOUNG_WON',
  DIALOG = 'DIALOG',
  SELECTION = 'SELECTION',
  OTHER = 'OTHER'
}
export interface IDialog {
  name?: string
  type: EDialogType
  content: string
  selection?: Array<string>
  next?: Array<Array<IDialog>>
  progress?: number
}
