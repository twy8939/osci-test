import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";
import { usePosts } from "../hooks/usePosts";
import Table from "../components/Table";
import dayjs from "dayjs";
import SearchBar from "../components/SearchBar";
import { Post } from "../types/post";
import { useEffect, useState } from "react";
import DateFilter from "../components/DateFilter";
import { Flex } from "@atlaskit/primitives";

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

  const handleDateChange = (start: string, end: string) => {
    if (data) {
      const filtered = data.filter((post) => {
        const postDate = dayjs(post.createdAt);
        return (
          (!start || postDate.isAfter(start)) &&
          (!end || postDate.isBefore(end))
        );
      });
      setFilteredPosts(filtered);
    }
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
      <Flex gap={"space.100"}>
        <SearchBar
          data={data || []}
          onSearch={handleSearch}
          searchKeys={["title"]}
          placeholderKey="post:search"
        />
        <DateFilter onDateChange={handleDateChange} />
      </Flex>

      <Table rows={rows} head={head} isLoading={isLoading} rowsPerPage={10} />
    </div>
  );
}
