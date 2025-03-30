import express from "express"

const app = express()

app.use("/", (_, res) => {
  res.send("Main entry")
})

export default app
