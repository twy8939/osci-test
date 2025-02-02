import { useTranslation } from "react-i18next";
import SearchIcon from "@atlaskit/icon/glyph/search";
import Textfield from "@atlaskit/textfield";
import { DropdownItem, DropdownItemGroup } from "@atlaskit/dropdown-menu";
import { useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Box, xcss } from "@atlaskit/primitives";

interface SearchInputProps<T> {
  data: T[];
  searchKeys: (keyof T)[];
  placeholderKey?: string;
  width?: string;
  height?: string;
}

const SearchInput = <T,>({
  data,
  searchKeys,
  placeholderKey = "common:search",
  width = "100%",
  height = "36px",
}: SearchInputProps<T>) => {
  const warperStyles = xcss({
    position: "relative",
    width,
  });

  const textFieldStyles = xcss({
    border: "2px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    width: "100%",
    outline: "none",
  });

  const autoCompleteStyles = xcss({
    position: "absolute",
    zIndex: "dialog",
    background: "white",
    boxShadow: "elevation.shadow.overflow",
    borderRadius: "4px",
    maxHeight: "200px",
    overflowY: "auto",
    width,
  });

  const searchIconStyles = xcss({
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
    <Box xcss={warperStyles}>
      <Box xcss={textFieldStyles}>
        <Textfield
          appearance="none"
          style={{ padding: "16px 12px" }}
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
            <Box onClick={handleSearch} xcss={searchIconStyles}>
              <SearchIcon label="Search" size="small" />
            </Box>
          }
        />
      </Box>

      {isOpen && autoCompleteList.length > 0 && (
        <Box onMouseDown={handleDropdownMouseDown} xcss={autoCompleteStyles}>
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

export default SearchInput;
