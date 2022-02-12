type Chunk<T extends any[], Number extends number, Result extends any[] = []> =
    T extends [infer FirstT, ...infer RestT]
        ? Result[-1]['length'] extends Number
            ? Chunk<RestT, Number, [...Result, [FirstT]]>
            : Result extends [...infer RestR, infer LastR]
                ? LastR extends any[]
                    ? Chunk<RestT, Number, [...RestR, [...LastR, FirstT]]>
                    : never
                : Chunk<RestT, Number, [[FirstT]]>
        : Result
