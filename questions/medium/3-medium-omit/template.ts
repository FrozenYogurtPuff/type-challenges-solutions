type MyOmit<T, K extends keyof T> = {
    [Prop in Exclude<keyof T, K>]: T[Prop]
}

// Key Remapping
type MyOmit<T, K extends keyof T> = {
    [Prop in keyof T as Prop extends K ? never : Prop]: T[Prop]
}
