import { RouteClient } from "./routes.client";
import { RouteProduct } from "./routes.product";
import { RouteUser } from "./routes.user";

export const Routes = [...RouteClient, ...RouteProduct, ...RouteUser]