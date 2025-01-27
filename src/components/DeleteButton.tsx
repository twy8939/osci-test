import Button from "@atlaskit/button/new";
import { useTranslation } from "react-i18next";

const DeleteButton = () => {
  const { t } = useTranslation("common");
  return <Button appearance="danger">{t("delete")}</Button>;
};

export default DeleteButton;
