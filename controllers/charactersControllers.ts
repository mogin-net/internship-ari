import type { Request, Response } from "express";
import { UserService } from "../services/userService.js";
import type { User, HttpResponse } from "../types.js";
import type { PutUserBody, PostUserBody } from "../schema/characters.js";

export class UserController {
  static async GET_ALL(
    req: Request<{}, unknown, unknown, { name?: string }>,
    res: Response<HttpResponse<User[]>>,
  ) {
    const nameQuery = req.query.name;

    const users = await UserService.getAllUsers(nameQuery);

    res.status(200).json({
      success: true,
      data: users,
    });
  }

  static async GET_ONE(
    req: Request<{ id: string }>,
    res: Response<HttpResponse<User>>,
  ) {
    const user = await UserService.getOneUsers(req.params.id);

    res.status(200).json({
      success: true,
      data: user,
    });
  }

  static async POST(
    req: Request<{}, unknown, PostUserBody>,
    res: Response<HttpResponse<User>>,
  ) {
    const user = await UserService.createUsers(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  }

  static async PUT(
    req: Request<{ id: string }, unknown, PutUserBody>,
    res: Response<HttpResponse<User>>,
  ) {
    const updatedUserData = req.body;
    const existingUserId = req.params.id;

    const user = await UserService.updateUsers(existingUserId, updatedUserData);

    res.status(200).json({
      success: true,
      data: user,
    });
  }

  static async DELETE(
    req: Request<{ id: string }>,
    res: Response<HttpResponse<undefined>>,
  ) {
    const userId = req.params.id;
    await UserService.deleteUsers(userId);

    res.status(200).json({
      success: true,
    });
  }
}