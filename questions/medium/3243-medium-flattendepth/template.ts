type FlattenDepth<Arr, Times extends number = 1, Counter extends any[] = []> =
    Counter['length'] extends Times
        ? Arr
        : Arr extends [infer First, ...infer Rest]
            ? First extends any[]
                ? [...FlattenDepth<First, Times, [...Counter, '']>, ...FlattenDepth<Rest, Times, Counter>]
                : [First, ...FlattenDepth<Rest, Times, Counter>]
            : Arr
