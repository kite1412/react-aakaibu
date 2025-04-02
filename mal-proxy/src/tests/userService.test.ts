import dotenv from "dotenv"
import UserServiceImpl from "../services/user/UserServiceImpl"
import { test, expect } from "vitest"

const userService = new UserServiceImpl()

dotenv.config()

test("get user info", async () => {
  const jwt = process.env.JWT ?? ""
  const res = await userService.getUserInfo(jwt)

  expect(res).toBeDefined()
  expect(true).toBe(true)
})
