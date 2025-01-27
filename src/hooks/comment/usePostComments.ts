import { useQuery } from "@tanstack/react-query";
import { fetchCommentsByPostId } from "../../api/commentApi";

export const usePostComments = (postId: string) => {
  return useQuery({
    queryKey: ["postComments", postId],
    queryFn: () => fetchCommentsByPostId(postId),
    enabled: postId !== "",
  });
};
