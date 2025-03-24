export default interface Pagination {
  lastVisiblePage: number
  hasNextPage: boolean
  items: Items
}

interface Items {
  count: number
  total: number
  perPage: number
}