export type SetOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type ConditionalPick<V, T> = {
  [K in keyof V as V[K] extends T ? K : never]: V[K];
};

export type AppendArgument<F extends (...args: any) => any, T> = F extends (
  ...args: infer P
) => infer Return
  ? (x: T, ...args: P) => Return
  : never;

export type NaiveFlat<T extends any[]> = T extends (infer P)[] ? P extends any[] ? NaiveFlat<P> : P : never;

export type EmptyObject = {
  [K in keyof any]: never;
};

export type NonEmptyArray<T> = [T, ...T[]];

export type JoinStrArray<
Arr extends string[],
Separator extends string
> = Arr extends [infer A, ...infer B]
? `${A extends string ? A : ''}${B extends [string, ...string[]]
    ? `${Separator}${JoinStrArray<B, Separator>}`
    : ''}`
: '';

type TrimLeft<V extends string> = V extends ` ${infer R}` ? TrimLeft<R> : V;
type TrimRight<V extends string> = V extends `${infer R} ` ? TrimRight<R> : V;

export type Trim<V extends string> = TrimLeft<TrimRight<V>>;
