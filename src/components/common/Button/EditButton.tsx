import Button from "@atlaskit/button/new";
import { useTranslation } from "react-i18next";
import EditIcon from "@atlaskit/icon/core/edit";

const EditButton = () => {
  const { t } = useTranslation("common");
  return (
    <Button>
      <EditIcon label={t("edit")} />
    </Button>
  );
};

export default EditButton;
