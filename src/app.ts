import Express from "express";
import Api from "./api";
import * as bodyParser from "body-parser";

class App {

    constructor (public readonly app = Express()) {
        this.mountRoutes()
    }

    private mountRoutes (): void {
        this.app.use(bodyParser.json());
        this.app.use( (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
            next();
          });
        this.app.use('/', Api);
    }
}

export default new App().app;