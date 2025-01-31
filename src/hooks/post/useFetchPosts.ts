import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../api/postApi";
import dayjs from "dayjs";
import { PostType } from "../../types/post";

export const useFetchPosts = ({
  searchKeys,
}: {
  searchKeys: (keyof PostType)[];
}) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const startDt = searchParams.get("startDt");
  const endDt = searchParams.get("endDt");

  const { data, ...queryState } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    select: (data) => {
      let filteredData = data;

      if (search) {
        filteredData = filteredData.filter((post) =>
          searchKeys.some((key) =>
            post[key].toString().toLowerCase().includes(search.toLowerCase())
          )
        );
      }

      if (startDt) {
        filteredData = filteredData.filter((post) => {
          const postDate = dayjs(post.createdAt);
          return postDate.isAfter(dayjs(startDt));
        });
      }

      if (endDt) {
        filteredData = filteredData.filter((post) => {
          const postDate = dayjs(post.createdAt);
          return postDate.isBefore(dayjs(endDt));
        });
      }

      return filteredData;
    },
  });

  return { data, ...queryState };
};
