import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Men from "./components/pages/Men.jsx";
import Women from "./components/pages/Women.jsx";
import Kids from "./components/pages/Kids.jsx";
import Main from "./components/Main.jsx";
import Cart from "./components/content/Cart.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./components/content/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
