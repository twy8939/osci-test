import React from "react";
import Pagination from "@atlaskit/pagination";
import { Flex } from "@atlaskit/primitives";

export const PAGE_SIZE = 10;

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <Flex justifyContent="center">
      <Pagination
        nextLabel="Next"
        label="Page"
        pageLabel="Page"
        pages={Array.from({ length: totalPages }, (_, i) => i + 1)}
        previousLabel="Previous"
        selectedIndex={currentPage - 1}
        onChange={(e, page) => onPageChange(page)}
      />
    </Flex>
  );
};

export default PaginationControls;
