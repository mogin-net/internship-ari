import { number, object, string, type InferType } from "yup";

export const postUserSchema = object({
    id: number().min(1).required(),
    email: string().email().required(),
    firstName: string().required(),
    lastName: string().optional(),
    age: number().min(16).required(),
    password: string().required().min(3),
});
export type PostUserBody = InferType<typeof postUserSchema>;

export const putUserSchema = object({
    id: number().min(1).required(),
    email: string().email().required(),
    firstName: string().required(),
    lastName: string().optional(),
    age: number().min(16).required(),
    password: string().required().min(3),
});
export type PutUserBody = InferType<typeof putUserSchema>