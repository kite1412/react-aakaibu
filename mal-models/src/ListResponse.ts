import { Paging } from "./Paging"

export interface ListResponse<T> {
  data: Array<T>
  paging: Paging
}