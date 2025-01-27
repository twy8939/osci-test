import Button from "@atlaskit/button/new";
import { useTranslation } from "react-i18next";

const EditButton = () => {
  const { t } = useTranslation("common");
  return <Button appearance="primary">{t("edit")}</Button>;
};

export default EditButton;
