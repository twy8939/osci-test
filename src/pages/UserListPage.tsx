import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import PageHeader from "@atlaskit/page-header";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function UserListPage() {
  const { t } = useTranslation("user");
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const { data, isLoading } = useUsers();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
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
    <div>
      <PageHeader>{t("title")}</PageHeader>
      <SearchBar value={search} onChange={handleSearch} />
      <Table rows={rows} head={head} isLoading={isLoading} />
    </div>
  );
}
