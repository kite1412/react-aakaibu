import { Request, RequestHandler, Response } from "express"
import { authService } from "../services"
import { ExchangeTokenBody } from "../services/auth/AuthServiceImpl"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isValidExchangeTokenBody(body: any): body is ExchangeTokenBody {
  return (
    typeof body === "object" &&
    body !== null &&
    typeof body.client_id === "string" &&
    typeof body.client_secret === "string" &&
    typeof body.code === "string" &&
    typeof body.redirect_uri === "string" &&
    typeof body.code_verifier === "string"
  )
}

const exchangeToken: RequestHandler = async (req: Request, res: Response) => {
  try {
    if (!isValidExchangeTokenBody(req.body)) {
      res.status(400).json({
        error: "Invalid request body"
      })
      return
    }

    const { code, client_id, client_secret, redirect_uri, code_verifier } =
      req.body
    const r = await authService.exchangeToken(
      code,
      client_id,
      client_secret,
      redirect_uri,
      code_verifier
    )

    res.status(200).send(r)
  } catch (err) {
    console.error(err)
    if (err instanceof Error)
      res.status(400).send({
        error: err.message
      })
    else
      res.status(400).send({
        error: "Fail to fetch data"
      })
  }
}

export default { exchangeToken }
