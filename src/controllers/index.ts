
import * as Express from "express";
import Health from "./health";
import Books from "./books"

const router = Express.Router();

router.use("/health", Health);
router.use("/books", Books);

export default router;