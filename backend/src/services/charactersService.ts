import { CharactersRepository } from "../repositories/charactersRepository.js";
import { BadRequestError, NotFoundError } from "../errors/appError.js";

export class CharactersService {
  static async getAllCharacters() {
    const characters = await CharactersRepository.getAllCharacters();

    return characters;
  }

  static async getCharacterById(id: number) {
    if (Number.isNaN(id)) {
      throw new BadRequestError("Character id must be a valid number");
    }

    const character = await CharactersRepository.getCharacterById(id);

    if (!character) {
      throw new NotFoundError(`Character with id ${id} not found`);
    }

    return character;
  }
}
