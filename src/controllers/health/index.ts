import * as Express from "express";
import HealthController from "./controller";

const controller = new HealthController();
const router = Express.Router();

router.get("/", async (req, res, next) => {
    controller.healthCheck(req, res, next);
});

export default router;