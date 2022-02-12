type Unique<T extends unknown[], U extends unknown[] = []> =
    T extends [...infer Rest, infer Last]
        ? Last extends Rest[number]
            ? Unique<Rest, U>
            : Unique<Rest, [Last, ...U]>
        : U
