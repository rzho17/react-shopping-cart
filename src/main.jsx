import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import All from "./components/pages/All.jsx";
import Men from "./components/pages/Men.jsx";
import Women from "./components/pages/Women.jsx";
import Signature from "./components/pages/Signature.jsx";
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
        path: "/all",
        element: <All />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/men/product",
        element: <ProductPage />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/signature",
        element: <Signature />,
      },
      {
        path: "/women/product",
        element: <ProductPage />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/kids/product",
        element: <ProductPage />,
      },
      {
        path: "/signature/product",
        element: <ProductPage />,
      },
      {
        path: "/all/product",
        element: <ProductPage />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
