import { useQuery } from "@tanstack/react-query";
import { fetchUserDetail } from "../api/userApi";

export const useUserDetail = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserDetail(id),
    enabled: id !== "",
  });
};
