export interface BaseResponseInterface<T> extends Response {
  count: number;
  results: T[]
}
