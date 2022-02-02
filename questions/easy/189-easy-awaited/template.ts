// Two-line version
type MyAwaited<T extends Promise<any>> = T extends Promise<infer F> ? InnerAwaited<F> : never
type InnerAwaited<T> = T extends Promise<infer F> ? InnerAwaited<F> : T

// Nested check version
// P(P(x)) -> P(x)
// P(x) -> x
// x -> never
type MyAwaited<F0 extends Promise<any>> = F0 extends Promise<infer F1> ?
                                            F1 extends Promise<any> ?
                                                MyAwaited<F1> : F1 : never