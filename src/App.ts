import {Application, Response} from "express";
import express from 'express';
import path from "path";
import { PrismaClient } from '@prisma/client'
import { type PrismaClient as PrismaClientType } from "prisma/prisma-client/scripts/default-index";

export class App {
    public app: Application;
    public port: number;
    public server: any;

    public prismaClient: PrismaClientType;

    constructor(appInit: {
        port: number;
        prefix: string;
        middlewares: any;
        controllers: any;
        models: any;
    }) {
        this.app = express();
        this.port = appInit.port;

        this.initMiddlewares(appInit.middlewares);
        this.initRoutes(appInit.controllers, appInit.prefix);

        this.initDataBaseConnection();
        this.initModels(appInit.models);

        this.server = require('http').createServer(this.app);
    }

    private initMiddlewares(middlewares: Array<any>) {
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        });
    }

    private initRoutes(controllers: Array<any>, prefix: string) {
        controllers.forEach((controller) => {
            this.app.use(prefix, controller.router);
        });

        this.app.get('/storage/files/:fileName', (req, res: Response) =>
            res.sendFile(path.join(__dirname, `./storage/files/${req.params.fileName}`))
        );
    }

    private initDataBaseConnection() {
        this.prismaClient = new PrismaClient()
    }

    private initModels(models: Array<{ model: any; schema: object; tableName: string }>) {
        //
    }

    public listen() {
        this.server.listen(this.port, () => {
            console.log(`App is working on the port ${this.port}`);
        });
    }
}