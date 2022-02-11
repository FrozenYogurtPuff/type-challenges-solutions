type DropChar<S, C> =
    S extends `${infer First}${infer Rest}`
        ? C extends First
            ? DropChar<Rest, C>
            : `${First}${DropChar<Rest, C>}`
        : ''

type DropChar<S, C extends string> =
    S extends `${infer Before}${C}${infer After}`
        ? `${Before}${DropChar<After, C>}`
        : S
