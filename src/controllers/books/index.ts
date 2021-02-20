import * as Express from "express";
import BookController from "./controller";

const controller = new BookController();
const router = Express.Router();

router.get("/", async (req, res, next) => {
    controller.getBooksController(req, res, next);
});

router.post("/", async (req, res, next) => {
    controller.addBookController(req, res, next);
});

router.put("/", async (req, res, next) => {
    controller.updateBookController(req, res, next);
});

router.put("/delete", async (req, res, next) => {
    controller.deleteBookController(req, res, next);
});

export default router;