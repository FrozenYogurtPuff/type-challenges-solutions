// https://github.com/type-challenges/type-challenges/issues/3444
declare function PromiseAll<T extends unknown[]>(values: readonly [...T]):
    Promise<{
        [K in keyof T]: T[K] extends Promise<infer P> ? P : T[K];
    }>
