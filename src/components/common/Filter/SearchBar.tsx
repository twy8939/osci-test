import { useTranslation } from "react-i18next";
import SearchIcon from "@atlaskit/icon/glyph/search";
import Textfield from "@atlaskit/textfield";
import { DropdownItem, DropdownItemGroup } from "@atlaskit/dropdown-menu";
import { useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

interface SearchBarProps<T> {
  data: T[];
  searchKeys: (keyof T)[];
  placeholderKey?: string;
  width?: string | number;
  height?: string | number;
}

const SearchBar = <T,>({
  data,
  searchKeys,
  placeholderKey = "common:search",
  width = 400,
  height = 36,
}: SearchBarProps<T>) => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const autoCompleteList = useMemo(() => {
    const uniqueItems = new Set(
      data.flatMap((item) => searchKeys.map((key) => String(item[key])))
    );

    return Array.from(uniqueItems)
      .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
      .sort();
  }, [data, searchKeys, query]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setIsOpen(event.target.value.trim() !== "");
  };

  const handleDropdownClick = () => {
    if (query.trim() === "") setIsOpen(false);
    else setIsOpen(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    setIsOpen(false);
    if (query === "") searchParams.delete("search");
    else searchParams.set("search", query);

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const handleDropdownMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleItemClick = (item: string) => {
    setQuery(item);
    handleSearch();
  };

  return (
    <div style={{ position: "relative", width }}>
      <Textfield
        value={query}
        onChange={handleInputChange}
        onClick={handleDropdownClick}
        onBlur={() => setIsOpen(false)}
        onKeyDown={handleKeyDown}
        placeholder={t(placeholderKey)}
        aria-label={t(placeholderKey)}
        isCompact
        inputMode="search"
        elemAfterInput={
          <div
            style={{
              height,
              cursor: "pointer",
              width: 30,
              display: "flex",
              alignItems: "center",
            }}
            onClick={handleSearch}
          >
            <SearchIcon label="Search" size="small" />
          </div>
        }
      />

      {isOpen && autoCompleteList.length > 0 && (
        <div
          style={{
            position: "absolute",
            zIndex: 99,
            background: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: 4,
            maxHeight: 200,
            overflowY: "auto",
            width,
          }}
          onMouseDown={handleDropdownMouseDown}
        >
          <DropdownItemGroup>
            {autoCompleteList.map((item, index) => (
              <DropdownItem onClick={() => handleItemClick(item)} key={index}>
                {item}
              </DropdownItem>
            ))}
          </DropdownItemGroup>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
