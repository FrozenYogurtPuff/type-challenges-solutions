type TupleToNestedObject<T, U> =
    T extends [infer First, ... infer Rest]
        ? { [K in First & string]: TupleToNestedObject<Rest, U> }
        : U
