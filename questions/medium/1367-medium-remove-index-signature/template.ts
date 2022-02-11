// Key Remapping - Template Literal
type RemoveIndexSignature<T> = {
    [Key in keyof T as Key extends `${infer Str}` ? Str : never]: T[Key]
}

// Key Remapping - Filter
type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K]
}