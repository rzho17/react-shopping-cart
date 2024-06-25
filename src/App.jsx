import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      {/* <main>
        <Outlet />
      </main> */}
      <Outlet />
      {/* <Main /> */}
      <Footer />
      {/* <Routes>
        <Route to="/men" path={<Men />} />
        <Route />
        <Route />
      </Routes> */}
    </>
  );
}

export default App;
