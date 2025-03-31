import { NextFunction, Request, RequestHandler, Response } from "express"
import { Buffer } from "buffer"
import HttpError from "../errors/HttpError"

const checkAuthHeader: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization
  const throwError = (message: string) => {
    throw new HttpError(message, 401)
  }

  if (!authHeader) {
    throwError("Authorization header required")
    return
  }

  const content = authHeader.split(" ")

  if (content.length !== 2 || !content[0].startsWith("Bearer"))
    throwError(`Authentication header's content must be in the following format: "Bearer <jwt>"`)

  const token = content[1]
  const parts = token.split(".")

  if (parts.length !== 3)
    throwError("Invalid JWT")

  const payload = JSON.parse(
    Buffer.from(parts[1], "base64url").toString("utf-8")
  )
  const exp: number | undefined = payload.exp

  // early prevention of sending expired token to actual request
  if (exp && Math.floor((Date.now() / 1000)) > exp)
    throwError("Token expired")

  next()
}

export default { checkAuthHeader }
