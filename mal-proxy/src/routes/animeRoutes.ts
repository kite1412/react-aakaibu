import express from "express"
import animeController from "../controllers/animeController"

const animeRouter = express.Router()

animeRouter.get("/user-list", animeController.getUserAnimeList)

export default animeRouter