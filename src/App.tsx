import { BrowserRouter } from "react-router-dom";

import "./i18n";
import AppRoutes from "./routes";
import "@atlaskit/css-reset";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
