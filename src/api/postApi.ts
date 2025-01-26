import { Post } from "../types/post";
import axiosInstance from "../utils/axiosInstance";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get(`/api/posts`);
  return response.data;
};
