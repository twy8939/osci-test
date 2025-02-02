import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";

import { Stack } from "@atlaskit/primitives";
import Table from "../../components/common/Table/Table";
import { useTodoTableData } from "../../hooks/todo/useTodoTableData";
import SearchInput from "../../components/common/Input/SearchInput";
import SearchableFilterSelect from "../../components/common/Select/SearchableFilterSelect";

export default function TodoListPage() {
  const { t } = useTranslation("todo");
  const { head, rows, isLoading, data, searchKeys } = useTodoTableData();

  return (
    <Stack>
      <PageHeader>{t("page_header")}</PageHeader>
      <Stack space="space.300">
        <Stack space={"space.200"}>
          <SearchInput
            data={data || []}
            searchKeys={searchKeys}
            placeholderKey="todo:search"
          />
          <SearchableFilterSelect
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
