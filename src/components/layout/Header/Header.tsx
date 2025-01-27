import { AtlassianIcon, AtlassianLogo } from "@atlaskit/logo";

import {
  AtlassianNavigation,
  PrimaryButton,
  ProductHome,
} from "@atlaskit/atlassian-navigation";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";

const AtlassianProductHome = () => (
  <ProductHome href="/" icon={AtlassianIcon} logo={AtlassianLogo} />
);

const headers = ["user", "post", "todo"];

const Header = () => {
  const { t } = useTranslation();

  return (
    <AtlassianNavigation
      label="site"
      primaryItems={headers.map((item) => {
        const title = t(`${item}:page_header`);
        return <PrimaryButton href={`/${item}`}>{title}</PrimaryButton>;
      })}
      renderProductHome={AtlassianProductHome}
      renderSettings={() => <LanguageSwitcher />}
    />
  );
};

export default Header;
