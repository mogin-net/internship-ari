export type User = {
  id: number;
  firstName: string;
  lastName: string | null;
  email: string;
  age: number;
};
export type Car = {
  name: string;
  year: number;
};
export type Role = {
  id: number;
  name: string;
};

export type HttpResponse<T> = {
  success: true;
  data?: T;
};
export type Character = {
  id: number;
  firstName: string;
  lastName: string | null;
  birthday: string;
  birthplace: string;
  fraction: string;
  height: number;
  weight: number;
  image: string;
  description: string;
};