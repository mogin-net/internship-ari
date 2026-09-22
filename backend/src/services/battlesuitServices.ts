import { BattlesuitsRepository } from "../repositories/battlesuitsRepository.js";
import { BadRequestError, NotFoundError } from "../errors/appError.js";

export class BattlesuitsService {
  static async getBattlesuitById(id: number) {
    if (Number.isNaN(id)) {
      throw new BadRequestError("Battlesuit id must be a valid number");
    }

    const battlesuit = await BattlesuitsRepository.getBattlesuitById(id);

    if (!battlesuit) {
      throw new NotFoundError(`Battlesuit with id ${id} not found`);
    }

    return battlesuit;
  }
}
