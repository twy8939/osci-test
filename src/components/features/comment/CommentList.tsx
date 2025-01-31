import Comment, {
  CommentAction,
  CommentAuthor,
  CommentTime,
} from "@atlaskit/comment";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import Avatar from "@atlaskit/avatar";
import { Stack, Text } from "@atlaskit/primitives";
import { CommentType } from "../../../types/comment";
import CommentInput from "./CommentInput";
import CommentEmptyState from "./CommentEmptyState";

const CommentList = ({ comments }: { comments: CommentType[] }) => {
  const { t } = useTranslation("common");
  return (
    <Stack space="space.300">
      <Stack>
        <CommentInput />
        <Text weight="medium" size="large">
          {t("comments")} ({comments?.length})
        </Text>
      </Stack>
      <Stack space="space.200">
        {comments.length > 0 ? (
          comments?.map((comment) => (
            <Comment
              key={comment.id}
              avatar={<Avatar name={comment.userId.toString()} />}
              author={<CommentAuthor>{comment.userId}</CommentAuthor>}
              time={
                <CommentTime>
                  {dayjs(comment.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                </CommentTime>
              }
              content={<p>{comment.content}</p>}
              actions={[
                <CommentAction>{t("edit")}</CommentAction>,
                <CommentAction>{t("delete")}</CommentAction>,
              ]}
            />
          ))
        ) : (
          <CommentEmptyState />
        )}
      </Stack>
    </Stack>
  );
};

export default CommentList;
