import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../api/todoApi";
import { TodoType } from "../../types/todo";
import { useEffect, useState, ReactElement } from "react";
import NotificationFlag from "../../components/common/Flag/NotificationFlag";
import { useTranslation } from "react-i18next";

export const useFetchTodos = ({
  searchKeys,
}: {
  searchKeys: (keyof TodoType)[];
}) => {
  const { t } = useTranslation("todo");

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const status = searchParams.get("status");

  const { data, ...queryState } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const [allTodos, setAllTodos] = useState<TodoType[] | undefined>(undefined);
  const [todos, setTodos] = useState<TodoType[] | undefined>(undefined);
  const [flag, setFlag] = useState<ReactElement | null>(null);

  const filterTodos = (list: TodoType[]) => {
    let filteredData = list;

    if (search) {
      const searchLower = search.toLowerCase();
      filteredData = filteredData.filter((todo) =>
        searchKeys.some((key) =>
          todo[key].toString().toLowerCase().includes(searchLower)
        )
      );
    }

    if (status) {
      const isCompleted = status === "completed";
      filteredData = filteredData.filter(
        (todo) => todo.completed === isCompleted
      );
    }

    return filteredData.sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  };

  const handleToggle = (id: number) => {
    setAllTodos((prevTodos) =>
      prevTodos?.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    const toggledTodo = allTodos?.find((todo) => todo.id === id);
    const notificationMessage = toggledTodo?.completed
      ? `${toggledTodo.title} ${t("notification_toggle_not_completed")}`
      : `${toggledTodo?.title} ${t("notification_toggle_completed")}`;

    const newFlag = (
      <NotificationFlag
        id={`toggle-${id}`}
        title={notificationMessage}
        onDismiss={dismissFlag}
        appearance={toggledTodo?.completed ? "error" : "success"}
      />
    );
    setFlag(newFlag);
  };

  const dismissFlag = () => {
    setFlag(null);
  };

  const handleDelete = (id: number) => {
    setAllTodos((prevTodos) => prevTodos?.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    if (data) {
      setAllTodos(data);
    }
  }, [data]);

  useEffect(() => {
    if (allTodos) {
      setTodos(filterTodos(allTodos));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, status, allTodos]);

  return { data: todos, handleToggle, handleDelete, flag, ...queryState };
};
