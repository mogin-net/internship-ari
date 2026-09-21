import { Router } from "express";
import { NewsController } from "../controllers/newsControllers.js";

const newsRouter = Router();

newsRouter.get("/", NewsController.GET_ALL_NEWS);
newsRouter.get("/:slug", NewsController.GET_NEWS_BY_SLUG);

export default newsRouter;
