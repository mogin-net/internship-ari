
import { type Request, type Response, type NextFunction } from "express";
import { ObjectSchema } from "yup";
import { error } from "node:console";
// function nameFunction(argument: any){


// }

export const validateBody = <T extends object>(schema: ObjectSchema<T>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      return next();
    } catch (error) {
      return next(error);
    }
  };
};