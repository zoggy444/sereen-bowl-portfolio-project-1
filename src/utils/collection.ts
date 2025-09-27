export function deepCopy<T>(c: Array<T> | object) {
  return JSON.parse(JSON.stringify(c));
}
