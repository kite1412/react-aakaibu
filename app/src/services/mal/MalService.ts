import { UserInfo } from "mal-models"

export default interface MalService {
  getUserInfo(): Promise<UserInfo | undefined>
}
