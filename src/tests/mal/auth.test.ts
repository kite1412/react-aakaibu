import { test } from "vitest"
import MalAuthService from "../../services/mal/MalAuthService"
import MalAuthServiceImpl from "../../services/mal/MalAuthServiceImpl"
import { expect } from "vitest"

const authService: MalAuthService = new MalAuthServiceImpl()

test("request auth code", async () => {
  const res = await authService.authCode()

  expect(res).toBeDefined()
})