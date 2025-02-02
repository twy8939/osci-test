import React from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EmptyState from "@atlaskit/empty-state";
import SearchIcon from "@atlaskit/icon/core/search";
import { Box, xcss } from "@atlaskit/primitives";

const emptyStyles = xcss({
  marginBottom: "space.100",
});

const TableEmptyState: React.FC = () => {
  const { t } = useTranslation("common");
  const [searchParams] = useSearchParams();

  return searchParams.size > 0 ? (
    <EmptyState
      header={t("no_results")}
      renderImage={() => (
        <Box xcss={emptyStyles}>
          <SearchIcon label="search" />
        </Box>
      )}
    />
  ) : (
    <EmptyState header={t("no_data")} />
  );
};

export default TableEmptyState;
