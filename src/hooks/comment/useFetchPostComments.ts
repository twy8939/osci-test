import { useQuery } from "@tanstack/react-query";
import { fetchCommentsByPostId } from "../../api/commentApi";

export const useFetchPostComments = (postId: string) => {
  return useQuery({
    queryKey: ["postComments", postId],
    queryFn: () => fetchCommentsByPostId(postId),
    enabled: postId !== "",
  });
};
