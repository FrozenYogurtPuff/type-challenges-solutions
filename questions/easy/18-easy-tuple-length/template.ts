type Length<T extends readonly any[]> = T extends { length: number } ? T['length'] : never
