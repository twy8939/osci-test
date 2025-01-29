import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";

import CheckCircleIcon from "@atlaskit/icon/glyph/check-circle";
import CrossCircleIcon from "@atlaskit/icon/glyph/cross-circle";
import { Flex, Stack } from "@atlaskit/primitives";
import { useTodos } from "../../hooks/todo/useTodos";
import Table from "../../components/common/Table/Table";
import SearchBar from "../../components/common/Filter/SearchBar";
import { TodoType } from "../../types/todo";

export default function TodoListPage() {
  const { t } = useTranslation("todo");

  const searchKeys: (keyof TodoType)[] = ["title"];

  const { data, isLoading } = useTodos({ searchKeys });

  const head = {
    cells: [
      {
        key: "title",
        content: t("title"),
      },
      {
        key: "completed",
        content: t("status"),
      },
    ],
  };

  const rows = data?.map((todo) => ({
    key: todo.id.toString(),
    cells: [
      {
        key: "title",
        content: todo.title,
      },
      {
        key: "completed",
        content: todo.completed ? (
          <Flex gap="space.100" alignItems="center">
            <CheckCircleIcon primaryColor="green" label={t("completed")} />
            {t("completed")}
          </Flex>
        ) : (
          <Flex gap="space.100" alignItems="center">
            <CrossCircleIcon primaryColor="red" label={t("notCompleted")} />
            {t("notCompleted")}
          </Flex>
        ),
      },
    ],
    style: { height: "50px" },
  }));

  return (
    <Stack>
      <PageHeader>{t("page_header")}</PageHeader>
      <Stack space="space.300">
        <Flex gap="space.100">
          <SearchBar
            data={data || []}
            searchKeys={searchKeys}
            placeholderKey="todo:search"
          />
        </Flex>

        <Table rows={rows} head={head} isLoading={isLoading} />
      </Stack>
    </Stack>
  );
}
