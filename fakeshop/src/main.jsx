import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./errorPage";
import Login from "./routes/login";
import Home from "./routes/home";

/** @jsx jsx */

const isMobile = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root isMobile={isMobile} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login isMobile={isMobile} />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
