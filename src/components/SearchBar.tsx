import React from "react";
import Textfield from "@atlaskit/textfield";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  placeholder = "Search",
  onChange,
}: SearchBarProps) => {
  return (
    <Textfield
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label="Search"
      isCompact
      inputMode="search"
    />
  );
};

export default SearchBar;
