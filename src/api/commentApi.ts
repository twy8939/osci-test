import { CommentType } from "../types/comment";
import axiosInstance from "../utils/axiosInstance";

export const fetchComments = async (): Promise<CommentType[]> => {
  const response = await axiosInstance.get(`/api/comments`);
  return response.data;
};

export const fetchCommentDetail = async (id: string): Promise<CommentType> => {
  const response = await axiosInstance.get(`/api/comments/${id}`);
  return response.data;
};

export const fetchCommentsByPostId = async (
  postId: string
): Promise<CommentType[]> => {
  const response = await axiosInstance.get(`/api/comments/post/${postId}`);
  return response.data;
};
