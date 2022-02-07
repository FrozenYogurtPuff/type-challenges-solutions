type Merge<F, S> = {
    [Key in keyof (F & S)]: Key extends keyof S ? S[Key] : (F & S)[Key];
}
