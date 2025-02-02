import { Flex, xcss } from "@atlaskit/primitives";
import Spinner from "@atlaskit/spinner";

const LoadingStyles = xcss({
  padding: "space.300",
});

const Loading = () => {
  return (
    <Flex xcss={LoadingStyles} justifyContent="center">
      <Spinner size="large" />
    </Flex>
  );
};

export default Loading;
