type RePack<T> = {
    [Key in keyof T]: T[Key]
}

type PartialByKeys<T , K = keyof T> = RePack<{
    [Key in Extract<keyof T, K>]+?: T[Key]
} & {
    [Key in Exclude<keyof T, K>]: T[Key]
}>
