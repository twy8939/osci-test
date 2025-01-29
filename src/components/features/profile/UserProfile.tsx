import { useUserDetail } from "../../../hooks/user/useUserDetail";
import { Flex, Stack, Text } from "@atlaskit/primitives";
import Avatar from "@atlaskit/avatar";

const UserProfile = ({ userId }: { userId: string }) => {
  const { data: user } = useUserDetail(userId);
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
