// https://github.com/type-challenges/type-challenges/issues/5547
type DigitToArray = {
    "0": [],
    "1": [''],
    "2": ['', ''],
    "3": ['', '', ''],
    "4": ['', '', '', ''],
    "5": ['', '', '', '', ''],
    "6": ['', '', '', '', '', ''],
    "7": ['', '', '', '', '', '', ''],
    "8": ['', '', '', '', '', '', '', ''],
    "9": ['', '', '', '', '', '', '', '', '']
}

type CreateArrayByLength<N extends string, R extends string[] = []> = N extends `${infer First}${infer Rest}`
    ? First extends keyof DigitToArray
        ? CreateArrayByLength<Rest, [...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R, ...DigitToArray[First]]>
        : never
    : R

type MinusOne<T extends number> = CreateArrayByLength<`${T}`> extends [infer First, ...infer Rest]
    ? Rest["length"]
    : never
