import { Router } from "express";
import { BattlesuitsController } from "../controllers/batllesuitControllers.js";

const batllesuitRouter = Router();

batllesuitRouter.get("/:id/icon", BattlesuitsController.GET_ICON);
batllesuitRouter.get("/:id/image", BattlesuitsController.GET_IMAGE);

export default batllesuitRouter;
