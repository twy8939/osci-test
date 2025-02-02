import React from "react";
import { Box, xcss } from "@atlaskit/primitives";

const cardStyles = xcss({
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "space.200",
});

const Card = ({ children }: { children: React.ReactNode }) => {
  return <Box xcss={cardStyles}>{children}</Box>;
};

export default Card;
