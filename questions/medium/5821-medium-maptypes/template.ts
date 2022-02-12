interface MapInterface {
    mapFrom: any;
    mapTo: any;
}

type MapTypes<T, R extends MapInterface> = {
    [Key in keyof T]: T[Key] extends R['mapFrom']
        ? R extends { mapFrom: T[Key] }
            ? R['mapTo']
            : never
        : T[Key]
}
