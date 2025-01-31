import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";

import { Stack } from "@atlaskit/primitives";
import Table from "../../components/common/Table/Table";
import SearchBar from "../../components/common/Filter/SearchBar";
import SelectFilter from "../../components/common/Filter/SelectFilter";
import { useTodoTableData } from "../../hooks/todo/useTodoTableData";

export default function TodoListPage() {
  const { t } = useTranslation("todo");
  const { head, rows, isLoading, data, searchKeys } = useTodoTableData();

  return (
    <Stack>
      <PageHeader>{t("page_header")}</PageHeader>
      <Stack space="space.300">
        <Stack space={"space.200"}>
          <SearchBar
            data={data || []}
            searchKeys={searchKeys}
            placeholderKey="todo:search"
          />
          <SelectFilter
            filterKey="status"
            label={t("status")}
            options={[
              { label: t("completed"), value: "completed" },
              { label: t("notCompleted"), value: "notCompleted" },
            ]}
            isAll
          />
        </Stack>

        <Table rows={rows} head={head} isLoading={isLoading} />
      </Stack>
    </Stack>
  );
}
