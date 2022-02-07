interface Dict {
    a: 'A', b: 'B', c: 'C', d: 'D', e: 'E', f: 'F', g: 'G', h: 'H', i: 'I', j: 'J', k: 'K', l: 'L', m: 'M',
    n: 'N', o: 'O', p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T', u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y', z: 'Z',
}

type CamelCase<S> =
    S extends `${infer Before}-${infer Trigger}${infer After}` ?
        Trigger extends keyof Dict ?
            `${Before}${Dict[Trigger]}${CamelCase<After>}`
        : `${Before}-${CamelCase<`${Trigger}${After}`>}`
    : S
