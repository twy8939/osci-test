import Button from "@atlaskit/button/new";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@atlaskit/icon/core/delete";

const DeleteButton = () => {
  const { t } = useTranslation("common");
  return (
    <Button>
      <DeleteIcon label={t("delete")} />
    </Button>
  );
};

export default DeleteButton;
