import express from "express"
import userController from "../controllers/userController"

const userRouter = express.Router()

userRouter.get("/me", userController.getUserInfo)

export default userRouter
