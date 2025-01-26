import { User } from "../types/user";
import axiosInstance from "../utils/axiosInstance";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get(`/api/users`);
  return response.data;
};

export const fetchUserDetail = async (id: string): Promise<User> => {
  const response = await axiosInstance.get(`/api/users/${id}`);
  return response.data;
};
