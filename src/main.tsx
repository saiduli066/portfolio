import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto";
import "@fontsource/outfit";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="w-full max-w-7xl mx-auto">
      <RouterProvider router={router}>
       
      </RouterProvider>
    </div>
  </React.StrictMode>
);
