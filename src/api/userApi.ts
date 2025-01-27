import { UserType } from "../types/user";
import axiosInstance from "../utils/axiosInstance";

export const fetchUsers = async (): Promise<UserType[]> => {
  const response = await axiosInstance.get(`/api/users`);
  return response.data;
};

export const fetchUserDetail = async (id: string): Promise<UserType> => {
  const response = await axiosInstance.get(`/api/users/${id}`);
  return response.data;
};
