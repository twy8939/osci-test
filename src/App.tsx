import { BrowserRouter } from "react-router-dom";

import "./i18n";
import AppRoutes from "./routes";
import "@atlaskit/css-reset";
import Layout from "./components/layout/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
