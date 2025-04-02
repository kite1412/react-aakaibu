import UserService from "./services/user/UserService"
import UserServiceImpl from "./services/user/UserServiceImpl"

export const userService: UserService = new UserServiceImpl()
