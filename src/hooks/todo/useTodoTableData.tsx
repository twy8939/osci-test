import { useMemo } from "react";
import { TodoType } from "../../types/todo";
import { Flex } from "@atlaskit/primitives";
import CheckCircleIcon from "@atlaskit/icon/glyph/check-circle";
import CrossCircleIcon from "@atlaskit/icon/glyph/cross-circle";
import { useFetchTodos } from "./useFetchTodos";
import { useTranslation } from "react-i18next";

export const useTodoTableData = () => {
  const { t } = useTranslation("todo");

  const searchKeys: (keyof TodoType)[] = ["title"];
  const { data, isLoading } = useFetchTodos({ searchKeys });

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

  const rows = useMemo(
    () =>
      data?.map((todo) => ({
        key: todo.id.toString(),
        cells: [
          { key: "title", content: todo.title },
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
      })),
    [data, t]
  );

  return { head, rows, isLoading, data, searchKeys };
};
