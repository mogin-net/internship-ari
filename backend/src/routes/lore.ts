import { Router } from "express";
import { LoreController } from "../controllers/loreControllers.js";

const loreRouter = Router();

loreRouter.get("/", LoreController.GET_ALL_LORE);

loreRouter.get("/:id", LoreController.GET_LORE_BY_ID);

loreRouter.get("/:id/image", LoreController.GET_IMAGE);

export default loreRouter;
