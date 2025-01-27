import { BrowserRouter } from "react-router-dom";

import "./i18n";
import AppRoutes from "./routes";
import "@atlaskit/css-reset";
import Header from "./components/layout/Header/Header";
import Layout from "./components/layout/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
