import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../api/todoApi";
import { TodoType } from "../../types/todo";
import { useEffect, useState } from "react";

export const useFetchTodos = ({
  searchKeys,
}: {
  searchKeys: (keyof TodoType)[];
}) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const status = searchParams.get("status");

  const { data, ...queryState } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const [allTodos, setAllTodos] = useState<TodoType[] | undefined>(undefined);
  const [todos, setTodos] = useState<TodoType[] | undefined>(undefined);

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
  }, [search, status, allTodos]);

  return { data: todos, handleToggle, handleDelete, ...queryState };
};
