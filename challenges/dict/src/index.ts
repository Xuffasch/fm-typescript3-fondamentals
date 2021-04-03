export type Dict<T> = {
  [k: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
  dict: Dict<T>, 
  fn: (arg: T, idx: number) => S): Dict<S> {
    const out: Dict<S> = {};

    Object.keys(dict).forEach((dKey, idx) => {
      const thisItem = dict[dKey];
      if (typeof thisItem !== 'undefined') {
        out[dKey] = fn(thisItem, idx)
      } 
    })

    return out;
}

mapDict({
  a: 'a',
  b: 'b'
}, (str) => ({ val: str }))

// Array.prototype.reduce, but for Dict
export function reduceDict<T, S>(
  dict: Dict<T>, 
  fn: (arg: T, acc: S) => S,
  initVal: S) : S {
    let out: S = initVal;

    Object.keys(dict).forEach((dKey) => {
      const currentItem = dict[dKey];
      if (typeof currentItem !== 'undefined') {
        out = fn(currentItem, out)
      }
    });

    return out;
}
