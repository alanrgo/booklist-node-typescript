import * as Express from "express";
import BookController from "./controller";

const controller = new BookController();
const router = Express.Router();

router.get("/", async (req, res, next) => {
    const response = controller.getBooksController(req, res, next);
    res.json(response)
});

export default router;