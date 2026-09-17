import { CharactersRepository } from "../repositories/charactersRepository.js";
import { NotFoundError } from "../errors/appError.js";

export class CharactersService {
  static async getAllCharacters() {
    const characters =
      await CharactersRepository.getAllCharacters();

    return characters;
  }

  static async getCharacterById(id: number) {
    const character =
      await CharactersRepository.getCharacterById(id);

    if (!character) {
      throw new NotFoundError(
        `Character with id ${id} not found`,
      );
    }

    return character;
  }
}