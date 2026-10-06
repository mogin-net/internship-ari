import { LoreRepository } from "../repositories/loreRepository.js";
import { BadRequestError, NotFoundError } from "../errors/appError.js";

export class LoreService {
  static async getAllLore() {
    const lore = await LoreRepository.getAllLore();

    return lore;
  }

  static async getLoreById(id: number) {
    if (Number.isNaN(id)) {
      throw new BadRequestError("Lore id must be a valid number");
    }

    const lore = await LoreRepository.getLoreById(id);

    if (!lore) {
      throw new NotFoundError(`Lore with id ${id} not found`);
    }

    return lore;
  }
}
