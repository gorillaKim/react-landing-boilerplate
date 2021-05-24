export interface IPlainObject {
  [key: string]: any
}

export type DumbFunction = () => void
export type AnyInputFunction = (param: any) => void
export type AnyOutputFunction = () => any
export type AnyFunction = (param: any) => any
export type MultiAnyFunction = (...params: any[]) => any