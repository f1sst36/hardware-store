import {App} from './App'
import {ProductController} from "./controllers/ProductController";

export const app = new App({
    port: +(process.env.PORT || 3000),
    prefix: "",
    controllers: [new ProductController()],
    models: [],
    middlewares: []
})

app.listen()
