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

const CommentList = ({ comments }: { comments: CommentType[] }) => {
  const { t } = useTranslation();
  return (
    <Stack space="space.300">
      <Text weight="medium" size="large">
        {t("common:comments")} ({comments?.length})
      </Text>
      <Stack space="space.200">
        {comments?.map((comment) => (
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
              <CommentAction>{t("common:edit")}</CommentAction>,
              <CommentAction>{t("common:delete")}</CommentAction>,
            ]}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default CommentList;
