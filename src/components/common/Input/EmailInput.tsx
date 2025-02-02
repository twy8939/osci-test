import { Field } from "@atlaskit/form";
import { useTranslation } from "react-i18next";
import TextInput from "./TextInput";
import { useState, useEffect } from "react";
import { FieldComponentProps } from "@atlaskit/form/dist/types/field";

const EmailInput = ({
  ...fieldProps
}: Omit<FieldComponentProps<string, HTMLInputElement>, "children">) => {
  const { t } = useTranslation();
  const [emailError, setEmailError] = useState<string | undefined>();

  const validateEmail = (value: string | undefined) => {
    if (!value) return undefined;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(value)) {
      setEmailError(t("common:invalid_email"));
      return t("common:invalid_email");
    }

    setEmailError(undefined);
    return undefined;
  };

  useEffect(() => {
    if (emailError) {
      setEmailError(t("common:invalid_email"));
    }
  }, [t, emailError]);

  return (
    <Field
      label={t("user:email")}
      validate={(value) => validateEmail(value)}
      {...fieldProps}
    >
      {({ fieldProps, error }) => (
        <TextInput fieldProps={fieldProps} error={emailError || error} />
      )}
    </Field>
  );
};

export default EmailInput;
