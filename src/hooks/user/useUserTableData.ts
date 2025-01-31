import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserType } from "../../types/user";
import { useFetchUsers } from "./useFetchUsers";

export const useUserTableData = () => {
  const { t } = useTranslation("user");

  const navigate = useNavigate();
  const location = useLocation();

  const searchKeys: (keyof UserType)[] = ["name", "email"];

  const { data, isLoading } = useFetchUsers({ searchKeys });

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

  const handleRowClick = (id: number) => {
    navigate(`${location.pathname}/${id}`);
  };

  return { head, rows, isLoading, data, searchKeys };
};
