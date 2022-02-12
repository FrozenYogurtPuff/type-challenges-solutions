type Fibonacci<T extends number, Index extends number[] = [1],
    Cur extends number[] = [1], Last extends number[] = []> =
    Index['length'] extends T
        ? Cur['length']
        : Fibonacci<T, [...Index, 1], [...Cur, ...Last], Cur>