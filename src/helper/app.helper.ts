import { Express } from 'express'

import cors from "cors"
import morgan from "morgan"
import { createServer } from 'http'
import ServerTool from 'node-crud-kit/lib/tools/server.tool'

export function initModules(app: any) {
  app.use(morgan("combined"))
  app.use(cors())
}

export const initServer = (app: Express, port: number): void => {
  const server = createServer(app)
  ServerTool.handleServerErrors(server)

  server.listen(port)
}
