// use T[number]
// ['a', 'b', 'c'] -> 'a' | 'b' | 'c'

// keyof any = string | number | symbol
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [K in T[number]]: K;
}
