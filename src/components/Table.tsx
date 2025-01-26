import React from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import { HeadType, RowType } from "@atlaskit/dynamic-table/dist/types/types";

interface TableProps {
  rows?: RowType[];
  head: HeadType;
  isLoading?: boolean;
}

const Table: React.FC<TableProps> = ({ rows, head, isLoading = false }) => {
  return <DynamicTable rows={rows || []} head={head} isLoading={isLoading} />;
};

export default Table;
