import React, { useEffect, useMemo } from "react";
import Flag from "@atlaskit/flag";
import SuccessIcon from "@atlaskit/icon/glyph/check-circle";
import ErrorIcon from "@atlaskit/icon/glyph/error";
import WarningIcon from "@atlaskit/icon/glyph/warning";
import InfoIcon from "@atlaskit/icon/glyph/info";
import { Box, xcss } from "@atlaskit/primitives";

interface NotificationFlagProps {
  id: string;
  title: string;
  appearance: "success" | "error" | "warning" | "info";
  onDismiss: (id: string) => void;
  duration?: number;
}

const flagStyles = xcss({
  position: "fixed",
  top: "80px",
  right: "30px",
  zIndex: "1",
});

const NotificationFlag: React.FC<NotificationFlagProps> = ({
  id,
  title,
  appearance,
  onDismiss,
  duration = 1000,
}) => {
  const icon = useMemo(() => {
    switch (appearance) {
      case "success":
        return <SuccessIcon label="Success" secondaryColor="green" />;

      case "error":
        return <ErrorIcon label="Error" secondaryColor="red" />;

      case "warning":
        return <WarningIcon label="Warning" secondaryColor="yellow" />;

      case "info":
        return <InfoIcon label="Info" secondaryColor="blue" />;
    }
  }, [appearance]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, onDismiss, duration]);

  return (
    <Box xcss={flagStyles}>
      <Flag
        id={id}
        key={id}
        appearance={appearance}
        icon={icon}
        title={title}
      />
    </Box>
  );
};

export default NotificationFlag;
