import type { Battlesuit } from "../../types.js";
import { DatabaseError } from "../errors/appError.js";
import { query } from "../util/pg.js";

export interface BattlesuitWithCharacter extends Battlesuit {
  characterFirstName: string;
}

export class BattlesuitsRepository {
  static async getBattlesuitById(
    id: number,
  ): Promise<BattlesuitWithCharacter | null> {
    try {
      const data = await query<BattlesuitWithCharacter>(
        `
        SELECT
          b.id,
          b.character_id AS "characterId",
          b.name,
          b.icon,
          b.image,
          c.first_name AS "characterFirstName"
        FROM public.battlesuits b
        JOIN public.characters c
          ON c.id = b.character_id
        WHERE b.id = $1
        `,
        [id],
      );

      return data.rows[0] ?? null;
    } catch (error) {
      console.error(error);

      throw new DatabaseError("Failed to get battlesuit from database");
    }
  }
}
