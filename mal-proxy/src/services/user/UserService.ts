import { UserInfo } from "mal-models"

export default interface UserService {
  getUserInfo(token: string): Promise<UserInfo>
}
