type LengthOfString<S extends string, Chars extends string[] = []> =
    S extends `${infer First}${infer Rest}` ?
        LengthOfString<Rest, [First, ...Chars]>
    : Chars['length']
