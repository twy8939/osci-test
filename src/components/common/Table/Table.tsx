import React from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import { HeadType, RowType } from "@atlaskit/dynamic-table/dist/types/types";

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
  return (
    <DynamicTable
      rows={rows || []}
      head={head}
      isLoading={isLoading}
      rowsPerPage={rowsPerPage}
      defaultPage={rowsPerPage && 1}
    />
  );
};

export default Table;
