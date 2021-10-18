import RequestEnum from 'node-crud-kit/lib/enums/request.enum'
import IApi from 'node-crud-kit/lib/interfaces/api.interface'
import RouteEnum from '../enums/route.enum';

export default class Route implements IApi {
  constructor(obj: Route) {
    this.enabled = obj.enabled;
    this.auth = obj.auth;
    this.type = obj.type;
    this.path = obj.path;
    this.routeCallback = obj.routeCallback;
    this.routeEnum = obj.routeEnum;
    this.option = obj.option;
  }

  enabled = true;

  routeEnum: RouteEnum;

  type: RequestEnum;

  auth = true;

  path: string;

  option?: any;

  routeCallback: (req: any, res: any, option?: any) => void;
}
