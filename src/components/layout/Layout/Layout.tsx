import Page, { Grid, GridColumn } from "@atlaskit/page";
import { Box, Flex, xcss } from "@atlaskit/primitives";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const layoutStyles = xcss({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const contentStyles = xcss({
  flex: "1",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box xcss={layoutStyles}>
      <Header />
      <Flex
        xcss={contentStyles}
        direction="column"
        justifyContent="space-between"
      >
        <Page>
          <Grid>
            <GridColumn medium={12}>
              <Box>{children}</Box>
            </GridColumn>
          </Grid>
        </Page>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
