// type Reverse<T extends any[], Result extends any[] = []> =
//     T extends [infer First, ... infer Rest]
//         ? Reverse<Rest, [First, ...Result]>
//         : Result

type FlipArguments<T> =
    T extends (...args: infer Args) => infer Return
        ? (...args: Reverse<Args>) => Return
        : never
