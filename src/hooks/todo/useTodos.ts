import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../api/todoApi";
import { TodoType } from "../../types/todo";

export const useTodos = ({
  searchKeys,
}: {
  searchKeys: (keyof TodoType)[];
}) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const status = searchParams.get("status");

  const { data, ...queryState } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select: (data) => {
      let filteredData = data;

      if (search) {
        filteredData = filteredData.filter((post) =>
          searchKeys.some((key) =>
            post[key].toString().toLowerCase().includes(search.toLowerCase())
          )
        );
      }

      if (status) {
        const isCompleted = status === "completed" ? true : false;
        filteredData = filteredData.filter(
          (post) => post.completed === isCompleted
        );
      }

      return filteredData;
    },
  });

  return { data, ...queryState };
};
