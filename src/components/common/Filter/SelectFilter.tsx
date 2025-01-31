import { Label } from "@atlaskit/form";
import { Box, Stack, xcss } from "@atlaskit/primitives";
import Select from "@atlaskit/select";
import { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const selectStyles = xcss({
  border: "2px solid #ddd",
  borderRadius: "8px",
  fontSize: "14px",
  width: "180px",
});

interface SelectFilterProps {
  options: { label: string; value: string }[];
  filterKey: string;
  label?: string;
  isAll?: boolean;
}

const SelectFilter = ({
  options,
  filterKey,
  label,
  isAll,
}: SelectFilterProps) => {
  const { t, i18n } = useTranslation("common");
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const filteredOptions = useMemo(() => {
    if (isAll) return [{ label: t("all"), value: "all" }, ...options];
    return options;
  }, [options, isAll, t]);

  const selectedOption =
    selectedValue === "all" && isAll
      ? filteredOptions[0]
      : filteredOptions.find((option) => option.value === selectedValue) ||
        null;

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
    <Stack>
      {label && <Label htmlFor="select-filter">{label}</Label>}
      <Box xcss={selectStyles}>
        <Select
          name="select-filter"
          appearance="none"
          options={filteredOptions}
          value={selectedOption}
          onChange={(item) => handleSelectChange(item)}
        />
      </Box>
    </Stack>
  );
};

export default SelectFilter;
