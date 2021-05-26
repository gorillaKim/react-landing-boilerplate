export interface IFaqListProps {
  contents: {
    id: string
    title: string
    description: Array<string>
  }[]
}
export interface IStateProps {
  [k: string]: boolean | undefined
}
export interface IFaqProps {
  contents: {
    id: string
    title: string
    description: Array<string>
  }[]
}
