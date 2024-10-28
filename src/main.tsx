import "./styles/globals.css"
import "./lib/i18n.ts"

import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"

import App from "./App"
import { DataProvider } from "./context/useContext"
import QueryProvider from "./lib/react-query/QueryProvider"

ReactDOM.createRoot(document.querySelector("#root")!).render(
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
