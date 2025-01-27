import { BrowserRouter } from "react-router-dom";

import "./i18n";
import AppRoutes from "./routes";
import "@atlaskit/css-reset";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
