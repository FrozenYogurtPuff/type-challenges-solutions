type AppendToObject<T extends Record<string, any>, U extends string, V> = {
    [Key in keyof T | U]: Key extends U ? V : T[Key];
}

type AppendToObject<T, U extends string, V, Combine = T & { [Key in U]: V }> = {
    [Key in keyof Combine]: Combine[Key];
}
