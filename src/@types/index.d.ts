type IsNeverType<T> = [T] extends [never] ? true : false;

type GetRecord<T> = IsNeverType<T> extends false
  ? T extends Record<any, any>
    ? {
        [Key in keyof T]: T[Key];
      }
    : {}
  : {};
