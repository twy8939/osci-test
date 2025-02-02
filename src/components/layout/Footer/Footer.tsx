import { Box, xcss, Stack, Text, Flex } from "@atlaskit/primitives";
import { AtlassianLogo } from "@atlaskit/logo";

const footerStyles = xcss({
  borderTop: "1px solid #ddd",
  padding: "space.300",
  marginTop: "space.500",
});

const Footer = () => {
  return (
    <footer>
      <Box xcss={footerStyles}>
        <Flex justifyContent="center" gap="space.300" alignItems="center">
          <Box>
            <AtlassianLogo appearance="brand" />
          </Box>
          <Stack space="space.100">
            <Text>© 2025 KIM YONG MIN. All rights reserved.</Text>
            <Text>
              Contact us:{" "}
              <a href="mailto:twy8939@naver.com">twy8939@naver.com</a> |
              +82-10-6279-8939
            </Text>
          </Stack>
        </Flex>
      </Box>
    </footer>
  );
};

export default Footer;
