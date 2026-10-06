import type { Character, CharactersList, Lore, LoreList } from "../../types.js";
import { DatabaseError } from "../errors/appError.js";
import { query } from "../util/pg.js";

export class LoreRepository {
  static async getLoreById(id: number): Promise<Lore | null> {
    try {
      const data = await query<Lore>(
        `
      SELECT
        l.id,
        l.title,
        l.description,
        l.category,
        l.image
      FROM public.lore l
      WHERE l.id = $1
      GROUP BY l.id
      `,
        [id],
      );

      return data.rows[0] ?? null;
    } catch (error) {
      console.error(error);
      throw new DatabaseError("Failed to get lore from database");
    }
  }

  static async getAllLore(): Promise<LoreList[]> {
    try {
      const data = await query<LoreList>(
        `
      SELECT
        l.id,
        l.title,
        l.category,
        l.image
      FROM public.lore l
      ORDER BY l.id ASC
      `,
      );

      return data.rows;
    } catch (error) {
      console.error(error);
      throw new DatabaseError("Failed to get lore from database");
    }
  }
}
