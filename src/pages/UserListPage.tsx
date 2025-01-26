import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers";
import PageHeader from "@atlaskit/page-header";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user";

export default function UserListPage() {
  const { t } = useTranslation("user");
  const navigate = useNavigate();

  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const { data, isLoading } = useUsers();

  const handleSearch = (selectedItem: User | undefined) => {
    if (selectedItem)
      setFilteredUsers(
        data?.filter((user) => user.id === selectedItem.id) || []
      );
    else setFilteredUsers(data || []);
  };

  const handleRowClick = (id: number) => {
    navigate(`/users/${id}`);
  };

  const head = {
    cells: [
      {
        key: "name",
        content: "Name",
      },
      {
        key: "email",
        content: "Email",
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
    <div>
      <PageHeader>{t("title")}</PageHeader>
      <SearchBar
        data={data || []}
        onSearch={handleSearch}
        searchKeys={["name", "email"]}
      />
      <Table rows={rows} head={head} isLoading={isLoading} />
    </div>
  );
}
