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

export interface Battlesuit {
  id: number;
  name: string;
  icon: string | null;
  image: string | null;
};

export interface Character {
  id: number;
  firstName: string;
  lastName: string | null;
  birthday: string | null;
  birthplace: string | null;
  faction: string | null;
  height: number | null;
  weight: number | null;
  description: string | null;
  image: string | null;
  battlesuits: Battlesuit[];
};