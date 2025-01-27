import { BrowserRouter } from "react-router-dom";

import "./i18n";
import AppRoutes from "./routes";
import "@atlaskit/css-reset";
import Header from "./components/Header";
import Layout from "./components/Layout";

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
