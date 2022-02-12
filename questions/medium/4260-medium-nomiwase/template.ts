type AllCombinations<S extends string, PRE extends string = ''> =
    S extends `${infer First}${infer Rest}`
        ? `${First}${AllCombinations<`${PRE}${Rest}`>}`
        | AllCombinations<Rest, `${PRE}${First}`>
        : ''
