import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";
import { Stack } from "@atlaskit/primitives";
import Table from "../../components/common/Table/Table";
import { usePostTableData } from "../../hooks/post/usePostTableData";
import SearchInput from "../../components/common/Input/SearchInput";
import SearchableRangeDatePicker from "../../components/common/DatePicker/SearchableRangeDatePicker";

export default function PostListPage() {
  const { t } = useTranslation("post");

  const { head, rows, isLoading, data, searchKeys } = usePostTableData();

  return (
    <Stack>
      <PageHeader>{t("page_header")}</PageHeader>
      <Stack space="space.300">
        <Stack space={"space.200"}>
          <SearchInput
            data={data || []}
            searchKeys={searchKeys}
            placeholderKey="post:search"
          />
          <SearchableRangeDatePicker />
        </Stack>

        <Table rows={rows} head={head} isLoading={isLoading} isPaginated />
      </Stack>
    </Stack>
  );
}
