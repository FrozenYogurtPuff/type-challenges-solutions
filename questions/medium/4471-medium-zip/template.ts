type Zip<T extends any[], U extends any[], Res extends any[] = []> =
    T extends [infer FirstT, ...infer RestT]
        ? U extends [infer FirstU, ...infer RestU]
            ? Zip<RestT, RestU, [...Res, [FirstT, FirstU]]>
            : Res
        : Res

type Zip<T extends any[], U extends any[]> =
    T extends [infer FirstT, ...infer RestT]
        ? U extends [infer FirstU, ...infer RestU]
            ? [[FirstT, FirstU], ...Zip<RestT, RestU>]
            : []
        : []
