import { Box, Text, xcss } from "@atlaskit/primitives";
import { useTranslation } from "react-i18next";
import TaskIcon from "@atlaskit/icon/glyph/task";
const todoWrapperStyles = xcss({
  width: "100%",
  height: "300px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  border: "1px solid #ddd",
  padding: "space.200",
});

const emptyTodoStyles = xcss({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "space.400",
  textAlign: "center",
});

const iconStyles = xcss({
  marginBottom: "space.100",
});

const TodoEmptyState = () => {
  const { t } = useTranslation("todo");
  return (
    <Box xcss={todoWrapperStyles}>
      <Box xcss={emptyTodoStyles}>
        <Box xcss={iconStyles}>
          <TaskIcon size="xlarge" label="todo" />
        </Box>
        <Text>{t("no_todos")}</Text>
      </Box>
    </Box>
  );
};

export default TodoEmptyState;
