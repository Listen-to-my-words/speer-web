import { IDialog } from '../types/IDialogs'
import * as week1 from './week1'
import * as week2 from './week2'

export const weekList1: [Array<IDialog>, Array<IDialog>, Array<IDialog>] = [week1.level1, week1.level2, week1.level3]
export const weekList2: [Array<IDialog>, Array<IDialog>, Array<IDialog>] = [week2.level1, week2.level2, week2.level1]

export const dialogList: [
  [Array<IDialog>, Array<IDialog>, Array<IDialog>],
  [Array<IDialog>, Array<IDialog>, Array<IDialog>]
] = [weekList1, weekList2]
