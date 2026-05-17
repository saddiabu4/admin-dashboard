export type Nullable<TValue> = TValue | null

export type Optional<TValue> = TValue | undefined

export type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined

export type WithId<TValue extends object = {}> = TValue & {
  id: string
}

export type MaybePromise<TValue> = TValue | Promise<TValue>
