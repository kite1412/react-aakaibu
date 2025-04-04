import express, { NextFunction, Request, Response } from "express"
import { ANIME_ROUTE, AUTH_ROUTE, USERS_ROUTE } from "./constants/endpoints"
import HttpError from "./errors/HttpError"
import authMiddleware from "./middlewares/auth"
import userRouter from "./routes/userRoutes"
import cors from "cors"
import authRouter from "./routes/authRoutes"
import animeRouter from "./routes/animeRoutes"

const app = express()

app.use(
  cors({
    origin: ["http://localhost:5100"]
  })
)
app.use(express.json())
app.use(express.urlencoded())

app.use(AUTH_ROUTE, authRouter)
app.use(authMiddleware.checkJwt)
app.use(USERS_ROUTE, userRouter)
app.use(ANIME_ROUTE, animeRouter)
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
