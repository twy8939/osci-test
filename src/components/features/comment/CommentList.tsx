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
import EmptyState from "@atlaskit/empty-state";
import CommentInput from "./CommentInput";

const CommentList = ({ comments }: { comments: CommentType[] }) => {
  const { t } = useTranslation("common");
  return (
    <Stack space="space.300">
      <Text weight="medium" size="large">
        {t("comments")} ({comments?.length})
      </Text>
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
          <EmptyState header={t("no_comments")} />
        )}
      </Stack>
      <CommentInput />
    </Stack>
  );
};

export default CommentList;
