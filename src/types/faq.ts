export interface ListProps {
  contents: {
    id: string,
    title: string,
    description: string,
  }[]
}
export interface StateProps {
  [k: string]: boolean | undefined
}
export interface FaqProps {
  contents: {
    id: string,
    title: string,
    description: string,
  }[]
}