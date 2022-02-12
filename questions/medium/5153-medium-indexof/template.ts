type IndexOf<T extends unknown[], U, Back extends string[] = []> =
    T extends [infer First, ...infer Rest]
        ? First extends U
            ? Back['length']
            : IndexOf<Rest, U, [...Back, '']>
        : -1
