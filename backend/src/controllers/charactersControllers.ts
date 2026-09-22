import type { Request, Response } from "express";
import type { HttpResponse, Character } from "../../types.js";
import { CharactersService } from "../services/charactersService.js";
import path from "node:path";
import { NotFoundError } from "../errors/appError.js";

export class CharactersController {
  static async GET_IMAGE(req: Request<{ id: string }>, res: Response) {
    const characterId = Number(req.params.id);

    const character = await CharactersService.getCharacterById(characterId);

    if (!character.image) {
      throw new NotFoundError("Character image not found");
    }

    const filePath = path.resolve(
      process.cwd(),
      "res",
      "img",
      "coverChars",
      character.image,
    );

    res.sendFile(filePath);
  }

  static async GET_ALL_CHARACTERS(
    _req: Request,
    res: Response<HttpResponse<Character[]>>,
  ) {
    const characters = await CharactersService.getAllCharacters();

    res.status(200).json({
      success: true,
      data: characters,
    });
  }

  static async GET_CHARACTER_BY_ID(
    req: Request<{ id: string }>,
    res: Response<HttpResponse<Character>>,
  ) {
    const id = Number(req.params.id);

    const character = await CharactersService.getCharacterById(id);

    res.status(200).json({
      success: true,
      data: character,
    });
  }
}
