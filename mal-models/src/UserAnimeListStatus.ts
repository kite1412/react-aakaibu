import { UserListStatus } from "./UserListStatus";

export interface UserAnimeListStatus extends UserListStatus {
  num_episodes_watched: number
  num_times_rewatched?: number
  rewatch_value?: number
  is_rewatching: boolean
}