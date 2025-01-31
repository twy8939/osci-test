import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";
import { Stack } from "@atlaskit/primitives";
import SearchBar from "../../components/common/Filter/SearchBar";
import Table from "../../components/common/Table/Table";
import RangeDateFilter from "../../components/common/Filter/RangeDateFilter";
import { usePostTableData } from "../../hooks/post/usePostTableData";

export default function PostListPage() {
  const { t } = useTranslation("post");

  const { head, rows, isLoading, data, searchKeys } = usePostTableData();

  return (
    <Stack>
      <PageHeader>{t("page_header")}</PageHeader>
      <Stack space="space.300">
        <Stack space={"space.200"}>
          <SearchBar
            data={data || []}
            searchKeys={searchKeys}
            placeholderKey="post:search"
          />
          <RangeDateFilter />
        </Stack>

        <Table rows={rows} head={head} isLoading={isLoading} isPaginated />
      </Stack>
    </Stack>
  );
}
