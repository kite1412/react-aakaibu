import UserInfo from "../../models/mal/UserInfo"

export default interface MalService {
  getUserInfo(): Promise<UserInfo> | null
}