import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import { useTranslation } from "react-i18next";

const LANGUAGES = ["en", "ko"];

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation("common");

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu
      trigger={`${t("language")}: ${t(`language_${i18n.language}`)}`}
      shouldFitContainer
    >
      <DropdownItemGroup>
        {LANGUAGES.map((code) => {
          return (
            <DropdownItem key={code} onClick={() => changeLanguage(code)}>
              {t(`language_${code}`)}
            </DropdownItem>
          );
        })}
      </DropdownItemGroup>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
