import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import PageHeader from "@atlaskit/page-header";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";

export default function UserListPage() {
  const [search, setSearch] = useState("");

  const { data, isLoading } = useUsers();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
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
  }));

  return (
    <div>
      <PageHeader>User Management</PageHeader>
      <SearchBar value={search} onChange={handleSearch} />
      <Table rows={rows} head={head} isLoading={isLoading} />
    </div>
  );
}
