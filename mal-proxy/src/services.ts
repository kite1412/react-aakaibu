import AuthService from "./services/auth/AuthService"
import AuthServiceImpl from "./services/auth/AuthServiceImpl"
import UserService from "./services/user/UserService"
import UserServiceImpl from "./services/user/UserServiceImpl"

export const userService: UserService = new UserServiceImpl()
export const authService: AuthService = new AuthServiceImpl()
