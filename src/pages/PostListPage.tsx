import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";
import { usePosts } from "../hooks/usePosts";
import Table from "../components/Table";
import dayjs from "dayjs";
import SearchBar from "../components/SearchBar";
import { Post } from "../types/post";
import { useEffect, useState } from "react";

export default function PostListPage() {
  const { t } = useTranslation("post");

  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const { data, isLoading } = usePosts();

  const handleSearch = (selectedItem: Post | undefined) => {
    if (selectedItem)
      setFilteredPosts(
        data?.filter((user) => user.id === selectedItem.id) || []
      );
    else setFilteredPosts(data || []);
  };

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

  const rows = filteredPosts.map((post) => ({
    key: post.id.toString(),
    cells: [
      { content: post.id },
      { content: post.title },
      { content: post.content },
      { content: dayjs(post.createdAt).format("YYYY-MM-DD HH:mm:ss") },
    ],
    style: { cursor: "pointer", height: "50px" },
  }));

  useEffect(() => {
    if (data) setFilteredPosts(data);
  }, [data]);

  return (
    <div>
      <PageHeader>{t("page_header")}</PageHeader>
      <SearchBar
        data={data || []}
        onSearch={handleSearch}
        searchKeys={["title"]}
        placeholderKey="post:search"
      />
      <Table rows={rows} head={head} isLoading={isLoading} rowsPerPage={10} />
    </div>
  );
}
