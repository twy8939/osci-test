import Form, { Field, FormFooter } from "@atlaskit/form";
import PageHeader from "@atlaskit/page-header";
import Textfield from "@atlaskit/textfield";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Button from "@atlaskit/button/new";
import { useUserDetail } from "../../hooks/user/useUserDetail";

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("user");

  const { data: user } = useUserDetail(id ?? "");

  if (!user) {
    return null;
  }

  return (
    <div>
      <PageHeader>{t("page_header")}</PageHeader>
      <Form onSubmit={(values) => console.log("submit", values)}>
        {({ formProps }) => (
          <form {...formProps}>
            <Field name="name" defaultValue={user.name} label={t("name")}>
              {({ fieldProps }) => <Textfield {...fieldProps} />}
            </Field>
            <Field name="email" defaultValue={user.email} label={t("email")}>
              {({ fieldProps }) => <Textfield {...fieldProps} />}
            </Field>
            <FormFooter>
              <Button type="submit" appearance="primary">
                {t("edit")}
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  );
}
