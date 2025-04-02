import { test, expect } from "vitest"
import AnimeServiceImpl from "../services/anime/AnimeServiceImpl";
import dotenv from "dotenv"

dotenv.config()

const service = new AnimeServiceImpl()

test("fetch user anime list", async () => {
  const res = await service.getUserAnimeList(process.env.JWT ?? "")

  expect(res).toBeDefined()
  expect(res.data.length > 0).toBe(true)
})