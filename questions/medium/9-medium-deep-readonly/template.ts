// https://stackoverflow.com/questions/68693054/what-is-extends-never-used-for
// "I don't think `keyof T extends never` is a great implementation of `DeepReadonly<T>`"

type DeepReadonly<T> = {
    +readonly [K in keyof T]: T[K] extends (string | number | symbol | Function)
        ? T[K] : DeepReadonly<T[K]>;
}
