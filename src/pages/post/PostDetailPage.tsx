import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Flex, Stack, Text } from "@atlaskit/primitives";
import { usePostDetail } from "../../hooks/post/usePostDetail";
import { usePostComments } from "../../hooks/comment/usePostComments";
import EditButton from "../../components/common/Button/EditButton";
import DeleteButton from "../../components/common/Button/DeleteButton";
import CommentList from "../../components/features/comment/CommentList";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("post");

  const { data: post } = usePostDetail(id ?? "");

  const { data: comments } = usePostComments(id ?? "");

  if (!post) {
    return null;
  }

  return (
    <Stack space="space.300">
      <Stack space="space.200">
        <PageHeader>{post.title}</PageHeader>

        <Text>{post.content}</Text>
        <Text>{`${t("userId")}: ${post.userId}`}</Text>
        <Text>
          {`${t("createdAt")}: ${dayjs(post.createdAt).format(
            "YYYY-MM-DD HH:mm:ss"
          )}`}
        </Text>
        <Flex gap="space.100">
          <EditButton />
          <DeleteButton />
        </Flex>
      </Stack>
      <CommentList comments={comments || []} />
    </Stack>
  );
}
