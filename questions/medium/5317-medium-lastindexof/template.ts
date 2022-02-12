type LastIndexOf<T extends unknown[], U,
    Result extends number = -1,
    Back extends string[] = []> =
    T extends [infer First, ...infer Rest]
        ? First extends U
            ? LastIndexOf<Rest, U, Back['length'], [...Back, '']>
            : LastIndexOf<Rest, U, Result, [...Back, '']>
        : Result

// https://github.com/type-challenges/type-challenges/issues/5330
type LastIndexOf<T extends any[], U> =
    T extends [...infer Rest, infer Last]
        ? Last extends U
            ? Rest['length']
            : LastIndexOf<Rest, U>
        : -1
