// ts union
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}


// js
function myPick (t, keys) {
    const obj = {}
    keys.forEach((key) => {
        if (key in t) {
            obj[key] = t[key]
        }
    })
    return obj;
}

// 1. return an object
// 2. traverse keys using forEach (mapped)
// 3. check if key in t (lookup)
// 4. get t[key] (indexed, constraint)