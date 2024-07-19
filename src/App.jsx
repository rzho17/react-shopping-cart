import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProductPage from "./components/content/ProductPage";
import Cart from "./components/content/Cart";
import ProductGallery from "./components/content/ProductGallery";
import ScrollToTop from "./components/utils/ScrollToTop";
import { Routes, Route, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const getProduct = (data, id) => {};

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* <ProductGallery /> */}
      {/* <Cart /> */}
      {/* <ProductPage /> */}
      {/* <Main /> */}

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
