type Join<T extends unknown[], U extends string | number> =
    T extends [infer First, ...infer Rest]
        ? First extends string
            ? Rest extends []
                ? `${First}`
                :`${First}${U}${Join<Rest, U>}`
            : never
        : ''
