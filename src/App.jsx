import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const [cartList, setCartList] = useState([]);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Outlet context={[cartList, setCartList]} />

      <Footer />
    </>
  );
}

export default App;
