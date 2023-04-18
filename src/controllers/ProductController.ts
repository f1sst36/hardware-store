import {CoreController} from "./CoreController";
import express, {Request, Response, Router} from "express";
import {app} from "../index";

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

    private async detailProduct(req: Request, res: Response) {
        const newCategory = await app.prismaClient.category.create({
            data: {
                name: 'Category 1.' + Math.random(),
                description: 'some test description',
                createdAt: new Date()
            },
        })

        return res.json(newCategory)
    }
}