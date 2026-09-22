import type { Request, Response } from "express";
import path from "node:path";

import { BattlesuitsService } from "../services/battlesuitServices.js";
import { NotFoundError } from "../errors/appError.js";

const getCharacterFolder = (firstName: string) => {
  return firstName.trim().toLowerCase().replace(/\s+/g, "_");
};

export class BattlesuitsController {
  static async GET_ICON(req: Request<{ id: string }>, res: Response) {
    const battlesuitId = Number(req.params.id);

    const battlesuit = await BattlesuitsService.getBattlesuitById(battlesuitId);

    if (!battlesuit.icon) {
      throw new NotFoundError("Battlesuit icon not found");
    }

    const folder = getCharacterFolder(battlesuit.characterFirstName);

    const filePath = path.resolve(
      process.cwd(),
      "res",
      "img",
      "battlesuits",
      "icons",
      folder,
      battlesuit.icon,
    );

    res.sendFile(filePath);
  }

  static async GET_IMAGE(req: Request<{ id: string }>, res: Response) {
    const battlesuitId = Number(req.params.id);

    const battlesuit = await BattlesuitsService.getBattlesuitById(battlesuitId);

    if (!battlesuit.image) {
      throw new NotFoundError("Battlesuit image not found");
    }

    const folder = getCharacterFolder(battlesuit.characterFirstName);

    const filePath = path.resolve(
      process.cwd(),
      "res",
      "img",
      "battlesuits",
      folder,
      battlesuit.image,
    );

    res.sendFile(filePath);
  }
}
