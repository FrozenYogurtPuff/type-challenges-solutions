// generic default types
type MyReadonly2<T, K = keyof T> = {
    +readonly [Prop in keyof T as Prop extends K ? Prop : never]: T[Prop]
} & {
    [Prop in keyof T as Prop extends K ? never : Prop]: T[Prop]
}

type MyReadonly2<T, K extends keyof T = keyof T> = {
    +readonly [Prop in K]: T[Prop]
} & {
    [Prop in Exclude<keyof T, K>]: T[Prop]
}
