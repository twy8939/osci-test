import { AtlassianIcon, AtlassianLogo } from "@atlaskit/logo";

import {
  AtlassianNavigation,
  PrimaryButton,
  ProductHome,
} from "@atlaskit/atlassian-navigation";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";
import { Link, useLocation } from "react-router-dom";

const AtlassianProductHome = () => (
  <ProductHome href="/" icon={AtlassianIcon} logo={AtlassianLogo} />
);

const headers = ["user", "post", "todo"];

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <AtlassianNavigation
      label="site"
      primaryItems={headers.map((item) => {
        const title = t(`${item}:page_header`);
        return (
          <Link to={`/${item}`} key={item} style={{ textDecoration: "none" }}>
            <PrimaryButton
              style={{
                color: location.pathname === `/${item}` ? "blue" : "black",
              }}
            >
              {title}
            </PrimaryButton>
          </Link>
        );
      })}
      renderProductHome={AtlassianProductHome}
      renderSettings={() => <LanguageSwitcher />}
    />
  );
};

export default Header;
