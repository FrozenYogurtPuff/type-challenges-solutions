type PercentageParser<A extends string> =
    A extends `${infer Unary}${infer Rest}`
        ? Unary extends '+' | '-'
            ? Rest extends `${infer Number}%`
                ? [Unary, Number, '%']
                : [Unary, Rest, '']
            : A extends `${infer Number}%`
                ? ['', Number, '%']
                : ['', A, '']
        : ['', '', '']

// https://github.com/type-challenges/type-challenges/issues/3788
type CheckPrefix<Prefix> = Prefix extends '+' | '-' ? Prefix : never;
type CheckSuffix<Suffix> =  Suffix extends `${infer Number}%` ? [Number, '%'] : [Suffix, ''];
type PercentageParser<A extends string> =
    A extends `${CheckPrefix<infer L>}${infer R}`
        ? [L, ...CheckSuffix<R>]
        : ['', ...CheckSuffix<A>];
