import { ProductController } from "./controllers/ProductController"

export const RouteProduct = [{
    method: "get",
    route: "/productes",
    controller: ProductController,
    action: "all"
}, {
    method: "get",
    route: "/productes/:id",
    controller: ProductController,
    action: "one"
}, {
    method: "post",
    route: "/productes",
    controller: ProductController,
    action: "save"
}, {
    method: "delete",
    route: "/productes/:id",
    controller: ProductController,
    action: "remove"
}]