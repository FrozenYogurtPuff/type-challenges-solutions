type Trunc<T extends number | string> =
    `${T}` extends `${infer Integer}.${infer _}`
        ? Integer
        : `${T}`
