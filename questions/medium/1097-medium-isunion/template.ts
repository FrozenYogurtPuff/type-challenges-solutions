type IsUnion<All, Item = All> =
    Item extends Item   // The union before extends will be distributive
        ? [Exclude<All, Item>] extends [never]
            ? false
            : true
        : never
