// Distributive Conditional Types
type MyExclude<T, U> = T extends U ? never : T