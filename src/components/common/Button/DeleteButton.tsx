import Button, { ButtonProps } from "@atlaskit/button/new";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@atlaskit/icon/core/delete";
import { useState } from "react";
import ConfirmModal from "../Modal/ConfirmModal";
import { UIAnalyticsEvent } from "@atlaskit/analytics-next";
import { ModalTitle } from "@atlaskit/modal-dialog";

const DeleteButton = ({ ...props }: Omit<ButtonProps, "children">) => {
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onConfirm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    analyticsEvent: UIAnalyticsEvent
  ) => {
    setIsOpen(false);
    if (props.onClick) props.onClick(e, analyticsEvent);
  };

  return (
    <>
      <Button {...props} onClick={onClick}>
        <DeleteIcon label={t("delete")} />
      </Button>
      <ConfirmModal
        isOpen={isOpen}
        title={
          <ModalTitle appearance="warning">
            {t("delete_confirmation_title")}
          </ModalTitle>
        }
        content={t("delete_confirmation_content")}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default DeleteButton;
