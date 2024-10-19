import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

import { SearchBar } from "./utils/SearchBar";
import SearchBarResults from "./utils/SearchBarResults";

import Footer from "./Footer";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchResults, setSearchResults] = useState([]);

  const [input, setInput] = useState("");

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      {/* <input type="text" placeholder="Search" /> */}
      <nav
        className={`${styles.navInfo} ${styles.leftNav}  ${
          menuOpen ? styles.open : ""
        }`}
      >
        <ul>
          <li>
            <NavLink to="/men" onClick={openMenu}>
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to="/women" onClick={openMenu}>
              Women
            </NavLink>
          </li>
          <li>
            <NavLink to="/kids" onClick={openMenu}>
              Kids
            </NavLink>
          </li>
          {/* <Footer /> */}
        </ul>
      </nav>

      <Link to="/" className={styles.headLink}>
        <h1 className={styles.title}>twelfth</h1>
      </Link>
      {/* <h1 className={styles.title}>ModishTee</h1> */}

      <nav
        className={`${styles.navInfo} ${styles.rightNav}  ${
          menuOpen ? styles.open : "null"
        }`}
      >
        <ul>
          <div className={styles.searchContainer}>
            <SearchBar
              setSearchResults={setSearchResults}
              input={input}
              setInput={setInput}
            />
            <SearchBarResults
              searchResults={searchResults}
              setMenuOpen={openMenu}
              setInput={setInput}
              setSearchResults={setSearchResults}
            />
          </div>
          {/* <input type="text" placeholder="Search" /> */}
          <Link to="/signature" onClick={openMenu}>
            Shop
          </Link>
          <Link to="/cart" onClick={openMenu}>
            Cart
          </Link>
        </ul>
      </nav>
      <div className={`${styles.menu} `} onClick={openMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
