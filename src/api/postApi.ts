import { PostType } from "../types/post";
import axiosInstance from "../utils/axiosInstance";

export const fetchPosts = async (): Promise<PostType[]> => {
  const response = await axiosInstance.get(`/api/posts`);
  return response.data;
};

export const fetchPostDetail = async (id: string): Promise<PostType> => {
  const response = await axiosInstance.get(`/api/posts/${id}`);
  return response.data;
};
