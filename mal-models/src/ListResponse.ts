import Paging from "./Paging"

export default interface ListResponse<T> {
  data: Array<T>
  paging: Paging
}