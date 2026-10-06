import type { Request, Response } from "express";
import type { HttpResponse, Lore, LoreList } from "../../types.js";
import { LoreService } from "../services/loreservices.js";
import { NotFoundError } from "../errors/appError.js";
import path from "node:path";

const getLoreFolder = (category: string) => {
  return category.trim().toLowerCase().replace(/\s+/g, "_");
};

export class LoreController {
  static async GET_IMAGE(req: Request<{ id: string }>, res: Response) {
    const loreId = Number(req.params.id);

    const lore = await LoreService.getLoreById(loreId);
    if (!lore.image) {
      throw new NotFoundError("Lore image not found");
    }

    const folder = getLoreFolder(lore.category);

    const filePath = path.resolve(
      process.cwd(),
      "res",
      "img",
      "lore",
      folder,
      lore.image,
    );
    res.sendFile(filePath);
  }
  static async GET_ALL_LORE(
    _req: Request,
    res: Response<HttpResponse<LoreList[]>>,
  ) {
    const lore = await LoreService.getAllLore();

    res.status(200).json({
      success: true,
      data: lore,
    });
  }

  static async GET_LORE_BY_ID(
    req: Request<{ id: string }>,
    res: Response<HttpResponse<Lore>>,
  ) {
    const id = Number(req.params.id);

    const lore = await LoreService.getLoreById(id);

    res.status(200).json({
      success: true,
      data: lore,
    });
  }
}
