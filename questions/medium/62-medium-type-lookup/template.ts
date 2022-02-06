// Distributive Conditional Types
type LookUp<Union, Type extends string> =
    Union extends { type: string } ?
        Union['type'] extends Type ?
            Union
        : never
    : never
