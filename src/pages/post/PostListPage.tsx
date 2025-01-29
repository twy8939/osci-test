import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { Flex, Stack } from "@atlaskit/primitives";
import { useLocation, useNavigate } from "react-router-dom";
import { usePosts } from "../../hooks/post/usePosts";
import SearchBar from "../../components/common/Filter/SearchBar";
import DateFilter from "../../components/common/Filter/DateFilter";
import Table from "../../components/common/Table/Table";
import { PostType } from "../../types/post";

export default function PostListPage() {
  const { t } = useTranslation("post");
  const navigate = useNavigate();
  const location = useLocation();

  const searchKeys: (keyof PostType)[] = ["title"];

  const { data, isLoading } = usePosts({ searchKeys });

  const handleRowClick = (id: number) => {
    navigate(`${location.pathname}/${id}`);
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

  return (
    <Stack>
      <PageHeader>{t("page_header")}</PageHeader>
      <Stack space="space.300">
        <Flex gap={"space.100"}>
          <SearchBar
            data={data || []}
            searchKeys={searchKeys}
            placeholderKey="post:search"
          />
          <DateFilter />
        </Flex>

        <Table rows={rows} head={head} isLoading={isLoading} rowsPerPage={10} />
      </Stack>
    </Stack>
  );
}
