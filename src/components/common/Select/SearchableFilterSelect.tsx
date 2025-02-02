import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import FilterSelect from "./FilterSelect";

interface SearchableFilterSelectProps {
  options: { label: string; value: string }[];
  filterKey: string;
  label?: string;
  isAll?: boolean;
}

const SearchableFilterSelect = ({
  options,
  filterKey,
  label,
  isAll,
}: SearchableFilterSelectProps) => {
  const { i18n } = useTranslation("common");
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelectChange = (
    item: { label: string; value: string } | null
  ) => {
    if (!item) return;

    const value = item.value;
    if (value === "all") {
      searchParams.delete(filterKey);
    } else {
      searchParams.set(filterKey, value);
    }

    setSelectedValue(value);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  useEffect(() => {
    const currentFilterValue = searchParams.get(filterKey);
    setSelectedValue(currentFilterValue || "all");
  }, [i18n.language, filterKey, searchParams]);

  return (
    <FilterSelect
      options={options}
      selectedValue={selectedValue}
      onSelectChange={handleSelectChange}
      label={label}
      isAll={isAll}
    />
  );
};

export default SearchableFilterSelect;
