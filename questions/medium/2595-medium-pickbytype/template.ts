// Key Remapping
type PickByType<T, U> = {
    [Key in keyof T as T[Key] extends U ? Key : never]: T[Key]
}

// External Filter
// https://github.com/type-challenges/type-challenges/issues/2603
type PickByType<T, U> = {
    [K in Extract<keyof T, Helper<T, keyof T, U>>]: T[K];
};

type Helper<T, K, U> = K extends keyof T ? (T[K] extends U ? K : never) : never;
