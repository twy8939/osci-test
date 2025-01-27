import { TodoType } from "../types/todo";
import axiosInstance from "../utils/axiosInstance";

export const fetchTodos = async (): Promise<TodoType[]> => {
  const response = await axiosInstance.get(`/api/todos`);
  return response.data;
};
