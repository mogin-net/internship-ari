import type { Character } from "../../types.js";
import { DatabaseError } from "../errors/appError.js";
import { query } from "../util/pg.js";

export class CharactersRepository {
  static async getCharacterById(
    id: number,
  ): Promise<Character | null> {
    try {
      const data = await query<Character>(
        `
      SELECT
        c.id,
        c.first_name AS "firstName",
        c.last_name AS "lastName",
        c.birthday,
        c.birthplace,
        c.fraction AS "faction",
        c.height,
        c.weight,
        c.description,
        c.image,

        COALESCE(
          json_agg(
            json_build_object(
              'id', b.id,
              'name', b.name,
              'icon', b.icon,
              'image', b.image
            )
            ORDER BY b.id
          ) FILTER (WHERE b.id IS NOT NULL),
          '[]'
        ) AS battlesuits

      FROM public.characters c

      LEFT JOIN public.battlesuits b
        ON b.character_id = c.id

      WHERE c.id = $1

      GROUP BY c.id
      `,
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
        `
      SELECT
        c.id,
        c.first_name AS "firstName",
        c.last_name AS "lastName",
        c.birthday,
        c.birthplace,
        c.fraction AS "faction",
        c.height,
        c.weight,
        c.description,
        c.image,

        COALESCE(
          json_agg(
            json_build_object(
              'id', b.id,
              'name', b.name,
              'icon', b.icon,
              'image', b.image
            )
            ORDER BY b.id
          ) FILTER (WHERE b.id IS NOT NULL),
          '[]'
        ) AS battlesuits

      FROM public.characters c

      LEFT JOIN public.battlesuits b
        ON b.character_id = c.id

      GROUP BY c.id

      ORDER BY c.id ASC
      `,
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