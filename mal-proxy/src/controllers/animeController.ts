import { Request, RequestHandler, Response } from "express";
import { animeService } from "../services";
import { extractJwt } from "../utils/tokens";

const getUserAnimeList: RequestHandler = async (req: Request, res: Response) => {
  try {
    const r = await animeService.getUserAnimeList(
      extractJwt(req.headers.authorization!)
    )

    res.status(200).send(r)
  } catch (e) {
    console.error(e)
    res.status(400).send(e)
  }
}

export default { getUserAnimeList }