type AnyOf<T extends readonly unknown[]> =
    T[number] extends 0 | '' | false | [] | null | undefined | Record<any, never>
        ? false
        : true

type AnyOf<T extends readonly unknown[]> =
    T extends [infer First, ...infer Rest]
        ? First extends 0 | '' | false | [] | null | undefined | Record<any, never>
            ? AnyOf<Rest>
            : true
        : false
