import { useQuery } from "@tanstack/react-query";
import { fetchPostDetail } from "../../api/postApi";

export const useFetchPostDetail = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostDetail(id),
    enabled: id !== "",
  });
};
