import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { store } from "./stores/store.js";
import { Provider } from "react-redux";
import  TenantProvider  from "./context/TenantProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <TenantProvider>
          <App />
        </TenantProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);