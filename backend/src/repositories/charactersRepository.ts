import type { Character } from "../../types.js";
import { DatabaseError } from "../errors/appError.js";
import { query } from "../util/pg.js";

export class CharactersRepository {
  static async getCharacterById(
    id: number,
  ): Promise<Character | null> {
    try {
      const data = await query<Character>(
        `SELECT
          id,
          first_name AS "firstName",
          last_name AS "lastName",
          birthday,
          birthplace,
          fraction,
          height,
          weight,
          description,
          image
        FROM public.characters
        WHERE id = $1`,
        [id],
      );

      return data.rows[0] ?? null;
    } catch (error) {
      console.error(error);

      throw new DatabaseError(
        "Failed to get character from database",
      );
    }
  }

  static async getAllCharacters(): Promise<Character[]> {
    try {
      const data = await query<Character>(
        `SELECT
          id,
          first_name AS "firstName",
          last_name AS "lastName",
          birthday,
          birthplace,
          fraction,
          height,
          weight,
          description,
          image
        FROM public.characters
        ORDER BY id ASC`,
      );

      return data.rows;
    } catch (error) {
      console.error(error);

      throw new DatabaseError(
        "Failed to get characters from database",
      );
    }
  }
}