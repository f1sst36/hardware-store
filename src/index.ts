import {App} from './App'
import {ProductController} from "./controllers/ProductController";

const app = new App({
    port: 3000,
    prefix: "",
    controllers: [new ProductController()],
    models: [],
    middlewares: []
})

app.listen()
