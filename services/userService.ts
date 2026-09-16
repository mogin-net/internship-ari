import { UserRepository } from "../repositories/charactersRepository.js";
import { BadRequestError, NotFoundError } from "../errors/appError.js";
import type { PostUserBody, PutUserBody } from "../schema/characters.js";
import bcrypt from "bcrypt";

export class UserService {
  static async getAllUsers(nameQuery?: string) {
    const users = nameQuery
      ? await UserRepository.getAllByName(nameQuery)
      : await UserRepository.getAll();

    return users;
  }

  static async getOneUsers(id: string) {
    const userIdNumber = Number(id);
    if (Number.isNaN(userIdNumber)) {
      throw new BadRequestError("User id must be a valid number");
    }

    const user = await UserRepository.getOne(userIdNumber);
    if (!user) {
      throw new NotFoundError("User not found");
    }

    return user;
  }

  static async createUsers(body: PostUserBody) {
    return await UserRepository.save({
      ...body,
      password: bcrypt.hashSync(body.password, 12),
    });
  }

  static async updateUsers(id: string, body: PutUserBody) {
    const userIdNumber = Number(id);
    if (Number.isNaN(userIdNumber)) {
      throw new BadRequestError("User id must be a valid number");
    }

    const user = await UserRepository.getOne(userIdNumber);
    if (!user) {
      throw new NotFoundError("User not found");
    }

    return UserRepository.update(user.id, {
      ...body,
      password: bcrypt.hashSync(body.password, 12),
    });
  }

  static async deleteUsers(id: string) {
    const userIdNumber = Number(id);
    if (Number.isNaN(userIdNumber)) {
      throw new BadRequestError("User id must be a valid number");
    }

    const user = await UserRepository.getOne(userIdNumber);
    if (!user) {
      throw new NotFoundError("User not found");
    }

    await UserRepository.delete(userIdNumber);
  }
}