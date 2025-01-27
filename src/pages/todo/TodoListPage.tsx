import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";

import CheckCircleIcon from "@atlaskit/icon/glyph/check-circle";
import CrossCircleIcon from "@atlaskit/icon/glyph/cross-circle";
import { Flex } from "@atlaskit/primitives";
import { useTodos } from "../../hooks/todo/useTodos";
import Table from "../../components/common/Table/Table";

export default function TodoListPage() {
  const { t } = useTranslation("todo");

  const { data, isLoading } = useTodos();

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
            <CheckCircleIcon label={t("completed")} />
            {t("completed")}
          </Flex>
        ) : (
          <Flex gap="space.100" alignItems="center">
            <CrossCircleIcon label={t("notCompleted")} />
            {t("notCompleted")}
          </Flex>
        ),
      },
    ],
  }));

  return (
    <div>
      <PageHeader>{t("page_header")}</PageHeader>

      <Table rows={rows} head={head} isLoading={isLoading} />
    </div>
  );
}
