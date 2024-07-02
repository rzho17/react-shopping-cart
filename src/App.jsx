import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProductPage from "./components/content/ProductPage";
import Cart from "./components/content/Cart";
import { Routes, Route, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Cart />
      {/* <ProductPage /> */}

      {/* <Outlet /> */}
      <Footer />
    </>
  );
}

export default App;
