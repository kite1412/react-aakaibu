import { expect, test } from "vitest"
import JikanService from "../services/jikan/JikanService"
import JikanServiceImpl from "../services/jikan/JikanServiceImpl"

const service: JikanService = new JikanServiceImpl()

test("get a list of top anime", async () => {
  const res = await service.getTopAnime()
  expect(
    typeof res === "object"
      && res.data.length > 0
  ).toBe(true)
})

test("get a list of top airing anime", async () => {
  const res = await service.getTopAiringAnime()
  expect(res).toBeDefined()
  expect(res?.data.length).toBeGreaterThan(0)
})