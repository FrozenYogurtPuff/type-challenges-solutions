type Flip<T> = {
    [Key in keyof T as
        T[Key] extends number | string | bigint | boolean
            ? `${T[Key]}`
            : never
    ]: Key
}
