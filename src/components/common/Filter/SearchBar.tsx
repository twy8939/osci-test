import { useTranslation } from "react-i18next";
import SearchIcon from "@atlaskit/icon/glyph/search";
import Textfield from "@atlaskit/textfield";
import { DropdownItem, DropdownItemGroup } from "@atlaskit/dropdown-menu";
import { useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Box, xcss } from "@atlaskit/primitives";

interface SearchBarProps<T> {
  data: T[];
  searchKeys: (keyof T)[];
  placeholderKey?: string;
  width?: string;
  height?: string;
}

const SearchBar = <T,>({
  data,
  searchKeys,
  placeholderKey = "common:search",
  width = "400px",
  height = "36px",
}: SearchBarProps<T>) => {
  const warperStyle = xcss({
    position: "relative",
    width,
  });

  const autoCompleteStyle = xcss({
    position: "absolute",
    zIndex: "dialog",
    background: "white",
    boxShadow: "elevation.shadow.overflow",
    borderRadius: "4px",
    maxHeight: "200px",
    overflowY: "auto",
    width,
  });

  const searchStyle = xcss({
    height,
    cursor: "pointer",
    width: "30px",
    display: "flex",
    alignItems: "center",
  });

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
    <Box xcss={warperStyle}>
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
          <Box onClick={handleSearch} xcss={searchStyle}>
            <SearchIcon label="Search" size="small" />
          </Box>
        }
      />

      {isOpen && autoCompleteList.length > 0 && (
        <Box onMouseDown={handleDropdownMouseDown} xcss={autoCompleteStyle}>
          <DropdownItemGroup>
            {autoCompleteList.map((item, index) => (
              <DropdownItem onClick={() => handleItemClick(item)} key={index}>
                {item}
              </DropdownItem>
            ))}
          </DropdownItemGroup>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
