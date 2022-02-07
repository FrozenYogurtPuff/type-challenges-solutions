interface Dict {
    a: 'A', b: 'B', c: 'C', d: 'D', e: 'E', f: 'F', g: 'G', h: 'H', i: 'I', j: 'J', k: 'K', l: 'L', m: 'M',
    n: 'N', o: 'O', p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T', u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y', z: 'Z',
}

// Specified check
type KebabCase<S extends string, Full = S> =
    S extends `${infer Trigger}${infer Rest}`
        ? Trigger extends Uppercase<keyof Dict>
            ? S extends Full
                ? `${Lowercase<Trigger>}${KebabCase<Rest, Full>}`
                : `-${Lowercase<Trigger>}${KebabCase<Rest, Full>}`
            : `${Trigger}${KebabCase<Rest, Full>}`
        : S

// Uncapitalize post-process
type KebabCase<S extends string> =
    S extends `${infer Trigger}${infer Rest}`
        ? Rest extends Uncapitalize<Rest>
            ? `${Lowercase<Trigger>}${KebabCase<Rest>}`
            : `${Lowercase<Trigger>}-${KebabCase<Uncapitalize<Rest>>}`
        : S

// Substitute insert character
type KebabCase<S extends string, Insert extends string = ''> =
    S extends `${infer Trigger}${infer Rest}`
        ? Trigger extends Lowercase<Trigger>
            ? `${Trigger}${KebabCase<Rest, '-'>}`
            : `${Insert}${Lowercase<Trigger>}${KebabCase<Rest, '-'>}`
        : S;
