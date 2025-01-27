import { useTranslation } from "react-i18next";
import Select from "@atlaskit/select";

interface SearchBarProps<T> {
  data: T[];
  onSearch: (selectedItem: T | undefined) => void;
  searchKeys: (keyof T)[];
  placeholderKey?: string;
}

const SearchBar = <T,>({
  data,
  onSearch,
  searchKeys,
  placeholderKey = "common:search",
}: SearchBarProps<T>) => {
  const { t } = useTranslation();

  const options = data.map((item) => ({
    label: searchKeys.map((key) => String(item[key])).join(" - "),
    value: item,
  }));

  const handleChange = (selectedItem: T | undefined) => {
    onSearch(selectedItem);
  };

  return (
    <Select
      options={options}
      onChange={(value) => handleChange(value?.value)}
      placeholder={t(placeholderKey)}
      isClearable
      defaultValue={null}
    />
    // <Textfield
    //   width={width}
    //   value={query}
    //   onChange={handleSearch}
    //   placeholder={t(placeholderKey)}
    //   aria-label={t(placeholderKey)}
    //   isCompact
    //   inputMode="search"
    //   elemAfterInput={
    //     <div style={{ marginRight: 6 }}>
    //       <SearchIcon label="Search" size="small" />
    //     </div>
    //   }
    // />
  );
};

export default SearchBar;
