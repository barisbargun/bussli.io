import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import { DataProvider } from "./context/useContext.tsx";
import QueryProvider from "./lib/react-query/QueryProvider.tsx";
import { HelmetProvider } from 'react-helmet-async';
import "./lib/i18n.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <DataProvider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </DataProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
