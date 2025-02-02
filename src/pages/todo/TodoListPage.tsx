import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";

import { Grid, media, Stack, xcss } from "@atlaskit/primitives";
import SearchInput from "../../components/common/Input/SearchInput";
import SearchableFilterSelect from "../../components/common/Select/SearchableFilterSelect";
import { TodoType } from "../../types/todo";
import { useFetchTodos } from "../../hooks/todo/useFetchTodos";
import TodoItem from "../../components/features/Todo/TodoItem";
import TodoEmptyState from "../../components/features/Todo/TodoEmptyState";
import Loading from "../../components/common/Loading/Loading";

const responsiveStyles = xcss({
  [media.above.xxs]: { gridTemplateColumns: "repeat(1, 1fr)" },
  [media.above.xs]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [media.above.sm]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

export default function TodoListPage() {
  const { t } = useTranslation("todo");
  const searchKeys: (keyof TodoType)[] = ["title"];
  const { data, isLoading, handleToggle, handleDelete, flag } = useFetchTodos({
    searchKeys,
  });

  return (
    <>
      {flag}
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

          {isLoading || !data ? (
            <Loading />
          ) : data?.length > 0 ? (
            <Grid gap="space.200" alignItems="center" xcss={responsiveStyles}>
              {data.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleToggle={handleToggle}
                  handleDelete={handleDelete}
                />
              ))}
            </Grid>
          ) : (
            <TodoEmptyState />
          )}
        </Stack>
      </Stack>
    </>
  );
}
