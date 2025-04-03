export default interface Pagination {
  last_visible_page: number
  has_next_page: boolean
  items: Items
}

interface Items {
  count: number
  total: number
  per_page: number
}
