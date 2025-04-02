import { test, expect } from "vitest"
import MalAuthService from "../../services/mal/MalAuthService"
import MalAuthServiceImpl from "../../services/mal/MalAuthServiceImpl"

const authService: MalAuthService = new MalAuthServiceImpl()

test("request auth code", async () => {
  const res = await authService.authCode()

  expect(res).toBeDefined()
})

test("exchange token", async () => {
  console.log(`portt: ${import.meta.env.VITE_PORT}`)
  const res = await authService.token(import.meta.env.VITE_MAL_AUTH_CODE)

  expect(res).toBeDefined()
})