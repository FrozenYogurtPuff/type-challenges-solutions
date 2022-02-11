type Reverse<T extends any[], Result extends any[] = []> =
    T extends [infer First, ... infer Rest]
        ? Reverse<Rest, [First, ...Result]>
        : Result
