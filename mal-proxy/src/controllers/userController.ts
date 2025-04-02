import { Request, RequestHandler, Response } from "express"
import { userService } from "../services"
import { extractJwt } from "../utils/tokens"

const getUserInfo: RequestHandler = async (req: Request, res: Response) => {
  try {
    const r = await userService.getUserInfo(
      extractJwt(req.headers.authorization!)
    )

    res.status(200).send(r)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
}

export default { getUserInfo }
