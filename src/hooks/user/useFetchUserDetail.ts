import { useQuery } from "@tanstack/react-query";
import { fetchUserDetail } from "../../api/userApi";

export const useFetchUserDetail = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserDetail(id),
    enabled: id !== "",
  });
};
