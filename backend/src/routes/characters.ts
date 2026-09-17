import { Router } from "express";
import { CharactersController } from "../controllers/charactersControllers.js";

const charactersRouter = Router();

charactersRouter.get(
  "/",
  CharactersController.GET_ALL_CHARACTERS,
);

charactersRouter.get(
  "/:id",
  CharactersController.GET_CHARACTER_BY_ID,
);

export default charactersRouter;