type TrimLeft<S extends string> =
    S extends `${infer WS}${infer Rest}` ?
        WS extends ' ' | '\n' | '\t' ?
            TrimLeft<Rest>
        : S
    : S
