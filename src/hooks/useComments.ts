import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../api/commentApi";

export const useComments = () => {
  return useQuery({ queryKey: ["comments"], queryFn: () => fetchComments() });
};
