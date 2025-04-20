import { Roles } from "./enums/role.enum";

export interface IRegister {
  username: string;
  email: string;
  password: string;
  role: Roles;
}
