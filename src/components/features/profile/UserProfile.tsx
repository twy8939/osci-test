import { useFetchUserDetail } from "../../../hooks/user/useFetchUserDetail";
import { Flex, Stack, Text } from "@atlaskit/primitives";
import Avatar from "@atlaskit/avatar";

const UserProfile = ({ userId }: { userId: string }) => {
  const { data: user } = useFetchUserDetail(userId);
  return (
    <Flex gap="space.100">
      <Avatar name={user?.id.toString()} size="large" />
      <Stack>
        <Text>{user?.name}</Text>
        <Text color="color.text.accent.teal">{user?.email}</Text>
      </Stack>
    </Flex>
  );
};

export default UserProfile;
