import express, { NextFunction, Request, Response } from "express"
import authMiddleware from "./middlewares/auth"
import HttpError from "./errors/HttpError"
import { USERS_ROUTE } from "./constants/endpoints"
import userRouter from "./routes/userRoutes"

const app = express()

app.use(express.json())

app.use(authMiddleware.checkAuthHeader)
app.use(USERS_ROUTE, userRouter)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpError) {
    res.status(err.code).send({
      error: err.message
    })
    return
  }

  res.status(500).send({
    error: "Internal Server Error"
  })
})

export default app
