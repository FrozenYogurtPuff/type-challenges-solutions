type WS = ' ' | '\n' | '\t'
type Trim<S extends string> =
    S extends `${WS}${infer Content}` ?
        Trim<Content>
    : S extends `${infer Content}${WS}` ?
        Trim<Content>
    : S
