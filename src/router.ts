import express, { Request, Response, Router } from "express"
import RequestEnum from "node-crud-kit/lib/enums/request.enum"
import LoggerTool from "node-crud-kit/lib/tools/logger.tool"
import ServerTool from "node-crud-kit/lib/tools/server.tool"
import Route from "./classes/route"
import RouteEnum from "./enums/route.enum"
import { ModelDatabase } from "./models/models.database"

export const getRouter = (db?: ModelDatabase): Router => {
  const router = express.Router()

  const setupRoute = (route: Route) => {
    if (route.enabled) {
      LoggerTool.log(route.path)

      // Выбор типа route (GET, POST, DELETE, PUT)
      switch (route.type) {
        // GET route handler
        case RequestEnum.get:
          router.get(
            route.path,
            route.auth
              ? ServerTool.ensureAuthenticated
              : ServerTool.withoutAuth,
            (request: Request, response: Response) => {
              route.routeCallback(request, response, route.option)
            }
          )
          break

        case RequestEnum.post:
          router.post(
            route.path,
            route.auth
              ? ServerTool.ensureAuthenticated
              : ServerTool.withoutAuth,
            (request: Request, response: Response) => {
              route.routeCallback(request, response, route.option)
            }
          )
          break

        case RequestEnum.put:
          router.put(
            route.path,
            route.auth
              ? ServerTool.ensureAuthenticated
              : ServerTool.withoutAuth,
            (request: Request, response: Response) => {
              route.routeCallback(request, response, route.option)
            }
          )
          break

        default:
          break
      }
    }
  }

  setupRoute(
    new Route({
      enabled: true,
      auth: false,
      routeEnum: RouteEnum.apiStatus,
      type: RequestEnum.get,
      path: RouteEnum.apiStatus,
      option: true,
      routeCallback: (req, res) => {
        res.send(true)
      },
    })
  )

  return router
}
