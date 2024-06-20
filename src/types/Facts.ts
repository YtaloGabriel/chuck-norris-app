export interface IFact {
  id: string
  icon_url: string
  url: string
  value: string
}

export interface IGetRandomFact {
  getRandomFact: IFact
}
