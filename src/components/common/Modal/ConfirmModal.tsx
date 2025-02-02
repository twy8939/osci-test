import Button, { IconButton } from "@atlaskit/button/new";
import CrossIcon from "@atlaskit/icon/glyph/cross";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";
import { Box, Flex, Grid, xcss } from "@atlaskit/primitives";
import { useTranslation } from "react-i18next";
import { UIAnalyticsEvent } from "@atlaskit/analytics-next";

const gridStyles = xcss({
  width: "100%",
});

const closeContainerStyles = xcss({
  gridArea: "close",
});

const titleContainerStyles = xcss({
  gridArea: "title",
});

const contentStyles = xcss({
  whiteSpace: "pre-wrap",
});

interface ConfirmModalProps {
  title: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    analyticsEvent: UIAnalyticsEvent
  ) => void;
}

const ConfirmModal = ({
  title,
  content,
  isOpen,
  onClose,
  onConfirm,
}: ConfirmModalProps) => {
  const { t } = useTranslation("common");

  const handleConfirm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    analyticsEvent: UIAnalyticsEvent
  ) => {
    e.stopPropagation();
    if (onConfirm) onConfirm(e, analyticsEvent);
    onClose();
  };

  return (
    <ModalTransition>
      {isOpen && (
        <Modal
          onClose={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <ModalHeader>
            <Grid
              gap="space.200"
              templateAreas={["title close"]}
              xcss={gridStyles}
            >
              <Flex xcss={closeContainerStyles} justifyContent="end">
                <IconButton
                  appearance="subtle"
                  icon={CrossIcon}
                  label="Close Modal"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                />
              </Flex>
              <Flex xcss={titleContainerStyles} justifyContent="start">
                {title}
              </Flex>
            </Grid>
          </ModalHeader>
          <ModalBody>
            <Box xcss={contentStyles}>{content}</Box>
          </ModalBody>
          <ModalFooter>
            <Button
              appearance="subtle"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              {t("modal_cancel")}
            </Button>
            <Button
              appearance="primary"
              onClick={(e, analytics) => handleConfirm(e, analytics)}
            >
              {t("modal_confirm")}
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </ModalTransition>
  );
};

export default ConfirmModal;
