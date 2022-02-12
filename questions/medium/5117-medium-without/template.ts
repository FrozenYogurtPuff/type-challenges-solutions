type Without<T extends unknown[], U> =
    T extends [infer First, ...infer Rest]
        ? First extends (U extends unknown[] ? U[number] : U)
            ? Without<Rest, U>
            : [First, ...Without<Rest, U>]
        : []
