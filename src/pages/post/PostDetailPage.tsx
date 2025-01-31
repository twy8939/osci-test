import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Box, Flex, Stack, Text, xcss } from "@atlaskit/primitives";
import { useFetchPostDetail } from "../../hooks/post/useFetchPostDetail";
import { useFetchPostComments } from "../../hooks/comment/useFetchPostComments";
import EditButton from "../../components/common/Button/EditButton";
import DeleteButton from "../../components/common/Button/DeleteButton";
import CommentList from "../../components/features/comment/CommentList";
import Heading from "@atlaskit/heading";
import UserProfile from "../../components/features/profile/UserProfile";

const someStyles = xcss({
  marginTop: "space.400",
});

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("post");

  const { data: post } = useFetchPostDetail(id ?? "");

  const { data: comments } = useFetchPostComments(id ?? "");

  if (!post) {
    return null;
  }

  return (
    <Box xcss={someStyles}>
      <Stack space="space.300">
        <Flex justifyContent="space-between" alignItems="center">
          <Stack space="space.200">
            <Heading size="xlarge">{post.title}</Heading>
            <Flex alignItems="center" gap="space.100">
              <Flex gap="space.100">
                <Text color="color.text.accent.gray">{`${t("createdAt")}: `}</Text>
                <Text color="color.text.accent.teal">
                  {dayjs(post.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                </Text>
              </Flex>
            </Flex>
          </Stack>
          <Flex gap="space.100">
            <EditButton />
            <DeleteButton />
          </Flex>
        </Flex>
        <Stack space="space.500">
          <Stack space="space.200">
            <UserProfile userId={post.userId.toString()} />
            <Text>{post.content}</Text>
          </Stack>

          <CommentList comments={comments || []} />
        </Stack>
      </Stack>
    </Box>
  );
}
