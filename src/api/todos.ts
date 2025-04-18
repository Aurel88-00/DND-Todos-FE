import { AxiosResponse } from "./../../node_modules/axios/index.d";
import { instance } from ".";
import { ITodos } from "../models/todos.interface";

export const getAllTodos = (): Promise<AxiosResponse<ITodos[]>> => {
  return instance.get("/todos");
};
