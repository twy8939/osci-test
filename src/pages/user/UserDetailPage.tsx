import Form, {
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  RequiredAsterisk,
} from "@atlaskit/form";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Button from "@atlaskit/button/new";
import { useFetchUserDetail } from "../../hooks/user/useFetchUserDetail";
import EmailInput from "../../components/common/Input/EmailInput";
import TextInput from "../../components/common/Input/TextInput";
import { Box, Text, xcss } from "@atlaskit/primitives";

const userDetailPageStyles = xcss({
  marginTop: "space.400",
});

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const { data: user } = useFetchUserDetail(id ?? "");

  if (!user) {
    return null;
  }

  return (
    <Box xcss={userDetailPageStyles}>
      <Form onSubmit={(values) => console.log("submit", values)}>
        {({ formProps, submitting }) => (
          <form {...formProps}>
            <FormHeader title={t("user:page_header")}>
              <Text aria-hidden="true">
                {t("common:required_fields")} <RequiredAsterisk />
              </Text>
            </FormHeader>
            <FormSection>
              <Field
                name="name"
                defaultValue={user.name}
                label={t("user:name")}
                isRequired
              >
                {({ fieldProps }) => <TextInput fieldProps={fieldProps} />}
              </Field>
              <EmailInput name="email" defaultValue={user.email} isRequired />
            </FormSection>

            <FormFooter>
              <Button type="submit" appearance="primary" isLoading={submitting}>
                {t("common:edit")}
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </Box>
  );
}
