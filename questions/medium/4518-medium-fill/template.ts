type Fill<
    T extends unknown[],
    N,
    Start extends number = 0,
    End extends number = T['length'],
    Result extends unknown[] = [],
    FillMode extends boolean = false
> = Result['length'] extends T['length']
    ? Result
    : FillMode extends true
        ? Result['length'] extends End // Stop fill
            ? Fill<T, N, Start, End, [...Result, T[Result['length']]], false>
            : Fill<T, N, Start, End, [...Result, N], true>
        : Result['length'] extends Start
            ? Result['length'] extends End
                ? Fill<T, N, Start, End, [...Result, T[Result['length']]], false>
                : Fill<T, N, Start, End, [...Result, N], true>
            : Fill<T, N, Start, End, [...Result, T[Result['length']]], false>
