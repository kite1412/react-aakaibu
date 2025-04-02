import Media from "./Media";
import UserListStatus from "./UserListStatus";

export default interface UserMediaList<T extends Media<U>, U extends UserListStatus> {
  node: T
  list_status: U
}