import { instance } from ".";
import { ILogin } from "../models/login.interface";
import { IRegister } from "../models/register.interface";

export const login = (
  payload: ILogin
): Promise<{ accessToken: string; refreshToken: string } | unknown> => {
  return instance.post("/login", payload);
};

export const register = (
  payload: IRegister
): Promise<{ accessToken: string } | unknown> => {
  return instance.post("/register", payload);
};

export const refreshToken = (payload: string ) => {
    return instance.post("/refresh", payload);

}