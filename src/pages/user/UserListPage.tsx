import { useEffect, useState } from "react";
import PageHeader from "@atlaskit/page-header";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack } from "@atlaskit/primitives";
import { UserType } from "../../types/user";
import { useUsers } from "../../hooks/user/useUsers";
import SearchBar from "../../components/common/Filter/SearchBar";
import Table from "../../components/common/Table/Table";

export default function UserListPage() {
  const { t } = useTranslation("user");
  const navigate = useNavigate();
  const location = useLocation();

  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);
  const { data, isLoading } = useUsers();

  const handleSearch = (selectedItem: UserType | undefined) => {
    if (selectedItem)
      setFilteredUsers(
        data?.filter((user) => user.id === selectedItem.id) || []
      );
    else setFilteredUsers(data || []);
  };

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

  const rows = filteredUsers.map((user) => ({
    key: user.id.toString(),
    cells: [
      { content: user.name },
      { content: user.email, style: { color: "#4e7397" } },
    ],
    style: { cursor: "pointer", height: "50px" },
    onClick: () => handleRowClick(user.id),
  }));

  useEffect(() => {
    if (data) setFilteredUsers(data);
  }, [data]);

  return (
    <Stack>
      <PageHeader>{t("page_header")}</PageHeader>
      <Stack space="space.300">
        <SearchBar
          data={data || []}
          onSearch={handleSearch}
          searchKeys={["name", "email"]}
        />

        <Table rows={rows} head={head} isLoading={isLoading} />
      </Stack>
    </Stack>
  );
}
