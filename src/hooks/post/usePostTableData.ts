import dayjs from "dayjs";

import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFetchPosts } from "./useFetchPosts";
import { PostType } from "../../types/post";

export const usePostTableData = () => {
  const { t } = useTranslation("post");

  const navigate = useNavigate();
  const location = useLocation();

  const searchKeys: (keyof PostType)[] = ["title"];
  const { data, isLoading } = useFetchPosts({ searchKeys });

  const head = {
    cells: [
      {
        key: "id",
        content: t("id"),
      },
      {
        key: "title",
        content: t("title"),
      },
      {
        key: "content",
        content: t("content"),
      },
      {
        key: "createdAt",
        content: t("createdAt"),
      },
    ],
  };

  const rows = data?.map((post) => ({
    key: post.id.toString(),
    cells: [
      { content: post.id },
      { content: post.title },
      { content: post.content },
      { content: dayjs(post.createdAt).format("YYYY-MM-DD HH:mm:ss") },
    ],
    style: { cursor: "pointer", height: "50px" },
    onClick: () => handleRowClick(post.id),
  }));

  const handleRowClick = (id: number) => {
    navigate(`${location.pathname}/${id}`);
  };

  return { head, rows, isLoading, data, searchKeys };
};
