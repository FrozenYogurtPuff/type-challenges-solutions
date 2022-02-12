type Flip<T> = {
    [Key in keyof T as
        T[Key] extends number | string | symbol
            ? `${T[Key]}`
            : never
    ]: Key
}
