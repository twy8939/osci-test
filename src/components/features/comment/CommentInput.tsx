import { Box, Flex, Stack, xcss } from "@atlaskit/primitives";
import React, { useState } from "react";
import Button from "@atlaskit/button/new";
import { useTranslation } from "react-i18next";
import TextArea from "@atlaskit/textarea";

const commentInputStyles = xcss({
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "14px",
  width: "100%",
  padding: "space.100",
});

const CommentInput = () => {
  const { t } = useTranslation("common");
  const [comment, setComment] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && comment.trim()) {
      handleAddComment();
    }
  };

  const handleAddComment = () => {
    console.log(comment);
  };
  return (
    <Stack space="space.100">
      <Box xcss={commentInputStyles}>
        <TextArea
          appearance="none"
          placeholder={t("comment_placeholder")}
          value={comment}
          onKeyDown={handleKeyPress}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setComment(e.target.value)
          }
        />
      </Box>
      <Flex justifyContent="end">
        <Button
          appearance="primary"
          onClick={handleAddComment}
          isDisabled={!comment.trim()}
        >
          {t("comment_add")}
        </Button>
      </Flex>
    </Stack>
  );
};

export default CommentInput;
