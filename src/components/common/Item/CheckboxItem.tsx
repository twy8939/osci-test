import Checkbox from "@atlaskit/checkbox";
import { Box, Flex, Stack, Text, xcss } from "@atlaskit/primitives";
import DeleteButton from "../Button/DeleteButton";
import React from "react";

const itemStyles = xcss({
  cursor: "pointer",
  userSelect: "none",
});

const checkboxStyles = xcss({
  border: "none",
  padding: "space.100",
});

const CheckboxItem = ({
  title,
  checked,
  description,
  onCheckboxChange,
  onDelete,
}: {
  title: React.ReactNode;
  checked: boolean;
  description?: React.ReactNode;
  onCheckboxChange?: () => void;
  onDelete?: () => void;
}) => {
  const handleDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (onDelete) onDelete();
  };
  return (
    <Box xcss={itemStyles} onClick={onCheckboxChange}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap="space.100">
          <Checkbox
            xcss={checkboxStyles}
            isChecked={checked}
            onChange={onCheckboxChange}
            onClick={onCheckboxChange}
          />
          <Stack space="space.075">
            <Text weight="semibold">{title}</Text>
            {description}
          </Stack>
        </Flex>

        {onDelete && (
          <DeleteButton
            appearance="subtle"
            onClick={(e) => handleDeleteClick(e)}
          />
        )}
      </Flex>
    </Box>
  );
};

export default CheckboxItem;
