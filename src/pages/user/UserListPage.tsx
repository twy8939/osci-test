import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack } from "@atlaskit/primitives";
import { useUsers } from "../../hooks/user/useUsers";
import SearchBar from "../../components/common/Filter/SearchBar";
import Table from "../../components/common/Table/Table";
import { UserType } from "../../types/user";

export default function UserListPage() {
  const { t } = useTranslation("user");
  const navigate = useNavigate();
  const location = useLocation();

  const searchKeys: (keyof UserType)[] = ["name", "email"];

  const { data, isLoading } = useUsers({ searchKeys });

  const handleRowClick = (id: number) => {
    navigate(`${location.pathname}/${id}`);
  };

  const head = {
    cells: [
      {
        key: "name",
        content: t("name"),
      },
      {
        key: "email",
        content: t("email"),
      },
    ],
  };

  const rows = data?.map((user) => ({
    key: user.id.toString(),
    cells: [
      { content: user.name },
      { content: user.email, style: { color: "#4e7397" } },
    ],
    style: { cursor: "pointer", height: "50px" },
    onClick: () => handleRowClick(user.id),
  }));

  return (
    <Stack>
      <PageHeader>{t("page_header")}</PageHeader>
      <Stack space="space.300">
        <SearchBar
          data={data || []}
          searchKeys={searchKeys}
          placeholderKey="user:search"
        />

        <Table rows={rows} head={head} isLoading={isLoading} />
      </Stack>
    </Stack>
  );
}
