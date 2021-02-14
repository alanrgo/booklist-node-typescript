
import * as Express from "express";
import Controllers from "./controllers";

const router = Express.Router();

router.use("/api", Controllers);

export default router;