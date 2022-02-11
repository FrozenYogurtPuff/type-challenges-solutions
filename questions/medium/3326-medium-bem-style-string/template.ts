type BEM<B extends string, E extends string[], M extends string[]> =
    AddM<AddE<B, E>, M>

type AddE<Base extends string, E extends string[]> =
    E['length'] extends 0
        ? Base
        : `${Base}__${E[number]}`

type AddM<Base extends string, M extends string[]> =
    M['length'] extends 0
        ? Base
        : `${Base}--${M[number]}`
