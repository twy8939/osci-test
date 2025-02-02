import Button, { ButtonProps } from "@atlaskit/button/new";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@atlaskit/icon/core/delete";

const DeleteButton = ({ ...props }: Omit<ButtonProps, "children">) => {
  const { t } = useTranslation("common");
  return (
    <Button {...props}>
      <DeleteIcon label={t("delete")} />
    </Button>
  );
};

export default DeleteButton;
