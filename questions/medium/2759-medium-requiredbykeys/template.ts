// type RePack<T> = {
//     [Key in keyof T]: T[Key]
// }

type RequiredByKeys<T , K = keyof T> = RePack<{
    [Key in keyof T & K]+?: T[Key]
} & {
    [Key in Exclude<keyof T, K>]: T[Key]
}>
