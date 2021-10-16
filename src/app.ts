import express from "express"
import { initModules, initServer } from "./helper/app.helper"
import { getRouter } from "./router"

const app = express()
const port = 5000

app.set('port', port)

const router = getRouter()
app.use('/', router)

initModules(app)

initServer(app, port)

export default app