import Button, { ButtonProps } from "@atlaskit/button/new";
import { useTranslation } from "react-i18next";
import EditIcon from "@atlaskit/icon/core/edit";

const EditButton = ({ ...props }: Omit<ButtonProps, "children">) => {
  const { t } = useTranslation("common");
  return (
    <Button {...props}>
      <EditIcon label={t("edit")} />
    </Button>
  );
};

export default EditButton;
