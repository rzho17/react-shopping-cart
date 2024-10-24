import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

import { SearchBar } from "./utils/SearchBar";
import SearchBarResults from "./utils/SearchBarResults";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchResults, setSearchResults] = useState([]);

  const [input, setInput] = useState("");

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav
        className={`${styles.navInfo} ${styles.leftNav}  ${
          menuOpen ? styles.open : ""
        }`}
      >
        <ul>
          <li>
            <NavLink to="/men" onClick={openMenu}>
              men
            </NavLink>
          </li>
          <li>
            <NavLink to="/women" onClick={openMenu}>
              women
            </NavLink>
          </li>
          <li>
            <NavLink to="/kids" onClick={openMenu}>
              kids
            </NavLink>
          </li>
        </ul>
      </nav>

      <Link to="/" className={styles.headLink}>
        <h1 className={styles.title}>twelfth</h1>
      </Link>

      <nav
        className={`${styles.navInfo} ${styles.rightNav}  ${
          menuOpen ? styles.open : ""
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
          <Link to="/signature" onClick={openMenu}>
            shop
          </Link>
          <Link to="/cart" onClick={openMenu}>
            cart
          </Link>
        </ul>
      </nav>
      <div
        className={`${styles.menu} ${menuOpen ? styles.rotate : styles.close}`}
        onClick={openMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
