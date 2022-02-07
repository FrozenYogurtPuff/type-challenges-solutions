// Key Remapping
type Diff<L, R> = {
    [
        Key in keyof (L & R) as
            Key extends keyof L
                ? Key extends keyof R
                    ? never
                    : Key
                : Key
    ]: Key extends keyof L
        ? L[Key]
        : Key extends keyof R
            ? R[Key]
            :never
}

// Exclude
type Diff<L, R> = {
    [Key in Exclude<keyof L, keyof R> | Exclude<keyof R, keyof L>]:
        Key extends keyof L ? L[Key] : Key extends keyof R ? R[Key] : never
}

// Get value for short
type Diff<L, R> = {
    [Key in Exclude<keyof L, keyof R> | Exclude<keyof R, keyof L>]: (L & R)[Key]
}
