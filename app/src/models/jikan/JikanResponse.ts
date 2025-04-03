import Pagination from "./Pagination"

export default interface JikanResponse<T> {
  data: T
  pagination: Pagination
}
