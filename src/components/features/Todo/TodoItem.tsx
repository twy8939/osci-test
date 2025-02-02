import { Flex, Text } from "@atlaskit/primitives";
import CheckboxItem from "../../common/Item/CheckboxItem";
import { TodoType } from "../../../types/todo";
import CheckCircleIcon from "@atlaskit/icon/glyph/check-circle";
import CrossCircleIcon from "@atlaskit/icon/glyph/cross-circle";
import { useTranslation } from "react-i18next";
import Card from "../../common/Card/Card";

type TodoItemProps = {
  todo: TodoType;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
};

const TodoItem = ({ todo, handleToggle, handleDelete }: TodoItemProps) => {
  const { t } = useTranslation("todo");

  return (
    <Card>
      <CheckboxItem
        title={todo.title}
        description={
          todo.completed ? (
            <Flex gap="space.050" alignItems="center">
              <CheckCircleIcon
                primaryColor="green"
                label={t("completed")}
                size="small"
              />
              <Text color="color.text.accent.green" size="small">
                {t("completed")}
              </Text>
            </Flex>
          ) : (
            <Flex gap="space.050" alignItems="center">
              <CrossCircleIcon
                primaryColor="red"
                label={t("notCompleted")}
                size="small"
              />
              <Text color="color.text.accent.red" size="small">
                {t("notCompleted")}
              </Text>
            </Flex>
          )
        }
        checked={todo.completed}
        onCheckboxChange={() => handleToggle(todo.id)}
        onDelete={() => handleDelete(todo.id)}
      />
    </Card>
  );
};

export default TodoItem;
