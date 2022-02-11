// Key Remapping
type OmitByType<T, U> = {
    [Key in keyof T as T[Key] extends U ? never : Key]: T[Key]
}

// External Filter
type Filter<T, K, U> =
    K extends keyof T
        ? T[K] extends U
            ? never
            : K
        : never

type OmitByType<T, U> = {
    [Key in Filter<T, keyof T, U>]: T[Key]
}