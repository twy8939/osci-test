import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../api/userApi";
import { UserType } from "../../types/user";

export const useUsers = ({
  searchKeys,
}: {
  searchKeys: (keyof UserType)[];
}) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const { data, ...queryState } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    select: (data) => {
      let filteredData = data;

      if (search) {
        filteredData = filteredData.filter((post) =>
          searchKeys.some((key) =>
            post[key].toString().toLowerCase().includes(search.toLowerCase())
          )
        );
      }

      return filteredData;
    },
  });

  return { data, ...queryState };
};
