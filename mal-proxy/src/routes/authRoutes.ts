import express from "express"
import authController from "../controllers/authController"

const authRouter = express.Router()

authRouter.post("/token", authController.exchangeToken)

export default authRouter
