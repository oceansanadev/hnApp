import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000, // 1 hour in milliseconds
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/hnApp">
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
