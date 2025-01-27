import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";
import { usePostDetail } from "../hooks/usePostDetail";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { usePostComments } from "../hooks/usePostComments";
import CommentList from "../components/CommentList";
import { Flex, Stack, Text } from "@atlaskit/primitives";
import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";

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
