import { users } from "../data.js";
import type { PostUserBody, PutUserBody } from "../schema/characters.js";
import type { User } from "../types.js";
import { DatabaseError } from "../errors/appError.js";
import { query } from "../util/pg.js";

export class UserRepository {
  static async getAllByName(nameQuery: string) {
    const sanitizedNameQuery = nameQuery.replace(/[%_]/g, "\\$&");
    const data = await query<User>(
      `SELECT 
        id,
        first_name AS "firstName",
        last_name AS "lastName",
        age,
        email
      FROM auth.users 
      WHERE concat(first_name, ' ', last_name)
      ILIKE $1`,
      [`%${sanitizedNameQuery}%`],
    );

    return data.rows;
  }

  static async getAll() {
    const data = await query<User>(`SELECT 
      id,
      first_name AS "firstName",
      last_name AS "lastName",
      age,
      email  
    FROM auth.users`);
    return data.rows;
  }

  static async getOne(id: number) {
    const data = await query<User>(
      `SELECT 
        id,
        first_name AS "firstName",
        last_name AS "lastName",
        age,
        email 
      FROM auth.users 
      WHERE id = $1`,
      [id],
    );

    return data.rows[0];
  }

  static async save({
    age,
    email,
    firstName,
    lastName,
    password,
  }: PostUserBody): Promise<User> {
    const users = await query<User>(
      `INSERT INTO auth.users (age, email, first_name, last_name, password)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING
          id,
          first_name AS "firstName",
          last_name AS "lastName",
          email,
          age`,
      [age, email, firstName, lastName, password],
    );

    const user = users.rows[0];
    if (!user) {
      throw new DatabaseError(
        "Failed to create user",
        "User was not returned from insert",
      );
    }

    return user;
  }

  static async update(
    id: number,
    { age, email, firstName, password, lastName }: PutUserBody,
  ): Promise<User> {
    const users = await query<User>(
      `UPDATE auth.users
        SET first_name = $1,
        last_name = $2,
        email = $3,
        age = $4,
        password = $5
      WHERE id = $6
      RETURNING
          id,
          first_name AS "firstName",
          last_name AS "lastName",
          email,
          age`,
      [firstName, lastName, email, age, password, id],
    );

    const user = users.rows[0];
    if (!user) {
      throw new DatabaseError(
        "Failed to update user",
        "User was not returned from update",
      );
    }

    return user;
  }

  static async delete(userId: number) {
    await query(`DELETE FROM auth.users WHERE id = $1`, [userId]);
  }
}