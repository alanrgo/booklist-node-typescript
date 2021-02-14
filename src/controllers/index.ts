
import * as Express from "express";
import Health from "./health";

const router = Express.Router();

router.use("/health", Health);

export default router;