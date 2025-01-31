import React from "react";
import Pagination from "@atlaskit/pagination";
import { Flex, xcss } from "@atlaskit/primitives";

export const PAGE_SIZE = 5;

const paginationStyles = xcss({
  marginBottom: "space.300",
});
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
    <Flex justifyContent="center" xcss={paginationStyles}>
      <Pagination
        nextLabel="Next"
        label="Page"
        pageLabel="Page"
        pages={Array.from({ length: totalPages }, (_, i) => i + 1)}
        previousLabel="Previous"
        selectedIndex={currentPage - 1}
        onChange={(_e, page) => onPageChange(page)}
      />
    </Flex>
  );
};

export default PaginationControls;
