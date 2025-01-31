import { Box, Text, xcss } from "@atlaskit/primitives";
import CommentIcon from "@atlaskit/icon/glyph/comment";
import { useTranslation } from "react-i18next";

const commentSectionStyles = xcss({
  padding: "space.200",
});

const emptyCommentStyles = xcss({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "space.400",
  textAlign: "center",
});

const iconStyles = xcss({
  marginBottom: "space.100",
});

const CommentEmptyState = () => {
  const { t } = useTranslation("common");
  return (
    <Box xcss={commentSectionStyles}>
      <Box xcss={emptyCommentStyles}>
        <Box xcss={iconStyles}>
          <CommentIcon size="xlarge" label="comment" />
        </Box>
        <Text>{t("no_comments")}</Text>
      </Box>
    </Box>
  );
};

export default CommentEmptyState;
