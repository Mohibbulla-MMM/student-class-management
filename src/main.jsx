import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Router from "./routes/Router.jsx";
import AuthProvaider from "./provaider/AuthProvaider.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvaider>
        <RouterProvider router={Router}>
          <Main />
        </RouterProvider>
      </AuthProvaider>
    </HelmetProvider>
  </React.StrictMode>
);
