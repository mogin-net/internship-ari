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