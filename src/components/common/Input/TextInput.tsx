import { ErrorMessage, FieldProps } from "@atlaskit/form";
import { Box, xcss } from "@atlaskit/primitives";
import Textfield from "@atlaskit/textfield";

const textfieldStyles = xcss({
  border: "1px solid #ddd",
  borderRadius: "4px",
});

const TextInput = ({
  fieldProps,
  error,
}: {
  fieldProps: FieldProps<string, HTMLInputElement>;
  error?: string;
}) => {
  return (
    <>
      <Box xcss={textfieldStyles}>
        <Textfield {...fieldProps} appearance="none" />
      </Box>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default TextInput;
