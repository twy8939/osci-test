import React, { useMemo } from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import { HeadType, RowType } from "@atlaskit/dynamic-table/dist/types/types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, xcss } from "@atlaskit/primitives";
import PaginationControls, {
  PAGE_SIZE,
} from "../Pagination/PaginationControls";
import TableEmptyState from "./TableEmptyState";

const tableStyles = xcss({
  border: "1px solid #ddd",
  borderRadius: "10px",
  marginBottom: "space.300",
  borderBlockEnd: "none",
});

const headerCellStyles = xcss({
  color: "color.text.subtle",
  fontSize: "14px",
  fontWeight: "600",
  padding: "space.200",
});

const rowCellStyles = xcss({
  padding: "space.200",
});

interface TableProps {
  rows?: RowType[];
  head: HeadType;
  isLoading?: boolean;
  isPaginated?: boolean;
  rowsPerPage?: number;
}

const Table: React.FC<TableProps> = ({
  rows = [],
  head,
  isLoading = false,
  isPaginated = false,
  rowsPerPage = PAGE_SIZE,
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("pagingIndex") || "1", 10);
  const pageSize = isPaginated
    ? parseInt(searchParams.get("pagingSize") || rowsPerPage.toString(), 10)
    : rows.length;

  const paginatedRows = useMemo(() => {
    if (!isPaginated) {
      return rows;
    }
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return rows.slice(startIndex, endIndex);
  }, [rows, currentPage, pageSize, isPaginated]);

  const totalPages = useMemo(() => {
    if (!isPaginated) {
      return 1;
    }
    return Math.ceil(rows.length / pageSize);
  }, [rows.length, pageSize, isPaginated]);

  const handlePageChange = (page: number) => {
    searchParams.set("pagingIndex", page.toString());
    searchParams.set("pagingSize", pageSize.toString());

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Box>
      <Box xcss={tableStyles}>
        <DynamicTable
          rows={paginatedRows.map((row) => ({
            ...row,
            cells: row.cells.map((cell) => ({
              ...cell,
              content: <Box xcss={rowCellStyles}>{cell.content}</Box>,
            })),
          }))}
          head={{
            cells: head.cells.map((cell) => ({
              ...cell,
              content: <Box xcss={headerCellStyles}>{cell.content}</Box>,
            })),
          }}
          isLoading={isLoading}
          emptyView={<TableEmptyState />}
        />
      </Box>
      {isPaginated && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </Box>
  );
};

export default Table;
