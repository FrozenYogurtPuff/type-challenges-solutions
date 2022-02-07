// https://github.com/type-challenges/type-challenges/issues/614
type Permutation<T, U = T> =    // U is a sub-container of T
    [T] extends [never] ?
        []
    : U extends U ?     // need a EVER-TRUE extends clause to loop the union
        [U,...Permutation<Exclude<T, U>>]
    : U
