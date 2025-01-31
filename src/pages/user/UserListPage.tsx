import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";
import { Stack } from "@atlaskit/primitives";
import SearchBar from "../../components/common/Filter/SearchBar";
import Table from "../../components/common/Table/Table";
import { useUserTableData } from "../../hooks/user/useUserTableData";

export default function UserListPage() {
  const { t } = useTranslation("user");

  const { head, rows, isLoading, data, searchKeys } = useUserTableData();

  return (
    <Stack>
      <PageHeader>{t("page_header")}</PageHeader>
      <Stack space="space.300">
        <SearchBar
          data={data || []}
          searchKeys={searchKeys}
          placeholderKey="user:search"
        />

        <Table rows={rows} head={head} isLoading={isLoading} />
      </Stack>
    </Stack>
  );
}
