import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Router from "./routes/Router.jsx";
import AuthProvaider from "./provaider/AuthProvaider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvaider>
          <RouterProvider router={Router}>
            <Main />
            <div className="z-50">
              <Toaster position="top-right" reverseOrder={false} />
            </div>
          </RouterProvider>
        </AuthProvaider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
