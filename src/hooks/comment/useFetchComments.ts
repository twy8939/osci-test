import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../../api/commentApi";

export const useFetchComments = () => {
  return useQuery({ queryKey: ["comments"], queryFn: () => fetchComments() });
};
