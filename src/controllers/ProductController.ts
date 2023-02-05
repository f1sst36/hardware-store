import {CoreController} from "./CoreController";
import express, {Request, Response, Router} from "express";

export class ProductController extends CoreController {
    constructor() {
        super();
        this.prefix = "/product";
        this.router = express.Router();
        this.initRoutes(this.router);
    }

    public initRoutes(router: Router) {
        router.get(this.prefix + "/", this.detailProduct);
    }

    private detailProduct(req: Request, res: Response) {
        return res.json({a: '123'})
    }
}