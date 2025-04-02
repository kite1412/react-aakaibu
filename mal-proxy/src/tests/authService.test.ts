import { expect, test } from "vitest"
import dotenv from "dotenv"
import AuthServiceImpl from "../services/auth/AuthServiceImpl"

dotenv.config()

const service = new AuthServiceImpl()

test("exhange access token", async () => {
  const res = await service.exchangeToken(
    process.env.AUTH_CODE ?? "",
    process.env.CLIENT_ID ?? "",
    process.env.CLIENT_SECRET ?? "",
    process.env.REDIRECT_URI ?? "",
    process.env.CODE_VERIFIER ?? ""
  )

  expect(res).toBeDefined()
  expect(res.token_type).toBe("Bearer")
})

test("refresh access token", async () => {
  const res = await service.refreshAccessToken(
    process.env.REFRESH_TOKEN ?? "",
    process.env.CLIENT_ID ?? "",
    process.env.CLIENT_SECRET ?? ""
  )

  expect(res).toBeDefined()
  expect(res.token_type).toBe("Bearer")
})
