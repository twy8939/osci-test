import Page, { Grid, GridColumn } from "@atlaskit/page";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Page>
      <Grid>
        <GridColumn medium={12}>{children}</GridColumn>
      </Grid>
    </Page>
  );
};

export default Layout;
