import { User } from "../types/user";
import axiosInstance from "../utils/axiosInstance";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get(`/api/users`);
  return response.data;
};
