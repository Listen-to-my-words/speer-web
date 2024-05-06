export interface ISubLevel {
  level: number
  title: string
}

export interface ILevel {
  image: string
  week: number
  title: string
  subLevels: [ISubLevel, ISubLevel, ISubLevel]
}
