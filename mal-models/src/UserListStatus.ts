export default interface UserListStatus {
  status: string
  score: number
  start_date: string | null
  finish_date: string | null
  priority: number
  tags: Array<string>
  comments: string
  updated_at: string
}