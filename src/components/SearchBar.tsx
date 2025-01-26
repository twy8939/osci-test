import React from "react";
import Textfield from "@atlaskit/textfield";
import SearchIcon from "@atlaskit/icon/glyph/search";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: number | string;
  placeholderKey?: string;
}

const SearchBar = ({
  value,
  onChange,
  width = 300,
  placeholderKey = "search",
}: SearchBarProps) => {
  const { t } = useTranslation();
  return (
    <Textfield
      width={width}
      value={value}
      onChange={onChange}
      placeholder={t(placeholderKey)}
      aria-label={t(placeholderKey)}
      isCompact
      inputMode="search"
      elemAfterInput={
        <div style={{ marginRight: 6 }}>
          <SearchIcon label="Search" size="small" />
        </div>
      }
    />
  );
};

export default SearchBar;
