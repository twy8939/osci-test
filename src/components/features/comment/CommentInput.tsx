import { Flex, Stack } from "@atlaskit/primitives";
import Textfield from "@atlaskit/textfield";
import React, { useState } from "react";
import Button from "@atlaskit/button/new";
import { useTranslation } from "react-i18next";

const CommentInput = () => {
  const { t } = useTranslation("common");
  const [comment, setComment] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && comment.trim()) {
      handleAddComment();
    }
  };

  const handleAddComment = () => {
    console.log(comment);
  };
  return (
    <Stack space="space.200">
      <Textfield
        placeholder={t("comment_placeholder")}
        value={comment}
        onKeyDown={handleKeyPress}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setComment(e.target.value)
        }
      />
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
