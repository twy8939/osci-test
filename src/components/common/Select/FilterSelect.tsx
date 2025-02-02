import { Label } from "@atlaskit/form";
import { Box, Stack, xcss } from "@atlaskit/primitives";
import Select from "@atlaskit/select";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const selectStyles = xcss({
  border: "2px solid #ddd",
  borderRadius: "8px",
  fontSize: "14px",
  width: "180px",
});

interface FilterSelectProps {
  options: { label: string; value: string }[];
  selectedValue: string | null;
  onSelectChange: (item: { label: string; value: string } | null) => void;
  label?: string;
  isAll?: boolean;
}

const FilterSelect = ({
  options,
  selectedValue,
  onSelectChange,
  label,
  isAll,
}: FilterSelectProps) => {
  const { t } = useTranslation("common");

  const filteredOptions = useMemo(() => {
    if (isAll) return [{ label: t("all"), value: "all" }, ...options];
    return options;
  }, [options, isAll, t]);

  const selectedOption =
    selectedValue === "all" && isAll
      ? filteredOptions[0]
      : filteredOptions.find((option) => option.value === selectedValue) ||
        null;

  return (
    <Stack>
      {label && <Label htmlFor="select-filter">{label}</Label>}
      <Box xcss={selectStyles}>
        <Select
          name="select-filter"
          appearance="none"
          options={filteredOptions}
          value={selectedOption}
          onChange={onSelectChange}
        />
      </Box>
    </Stack>
  );
};

export default FilterSelect;
