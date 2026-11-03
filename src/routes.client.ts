import { ClientController } from "./controllers/ClientController"

export const RouteClient = [{
    method: "get",
    route: "/clients",
    controller: ClientController,
    action: "all"
}, {
    method: "get",
    route: "/clients/:id",
    controller: ClientController,
    action: "one"
}, {
    method: "post",
    route: "/clients",
    controller: ClientController,
    action: "save"
}, {
    method: "delete",
    route: "/clients/:id",
    controller: ClientController,
    action: "remove"
}]