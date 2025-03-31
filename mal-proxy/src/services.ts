import UserService from "./services/UserService"
import UserServiceImpl from "./services/UserServiceImpl"

export const userService: UserService = new UserServiceImpl()
