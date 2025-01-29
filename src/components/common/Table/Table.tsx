import React from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import { HeadType, RowType } from "@atlaskit/dynamic-table/dist/types/types";
import EmptyState from "@atlaskit/empty-state";
import SearchIcon from "@atlaskit/icon/glyph/search";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { Box, xcss } from "@atlaskit/primitives";

interface TableProps {
  rows?: RowType[];
  head: HeadType;
  isLoading?: boolean;
  rowsPerPage?: number;
}

const Table: React.FC<TableProps> = ({
  rows,
  head,
  isLoading = false,
  rowsPerPage = undefined,
}) => {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation("common");

  const someStyles = xcss({
    marginBottom: "space.100",
  });

  return (
    <DynamicTable
      rows={rows || []}
      head={head}
      isLoading={isLoading}
      rowsPerPage={rowsPerPage}
      defaultPage={rowsPerPage && 1}
      emptyView={
        searchParams.size > 0 ? (
          <EmptyState
            header={t("no_results")}
            renderImage={() => (
              <Box xcss={someStyles}>
                <SearchIcon label="search" />
              </Box>
            )}
          />
        ) : (
          <EmptyState header={t("no_data")} />
        )
      }
    />
  );
};

export default Table;
