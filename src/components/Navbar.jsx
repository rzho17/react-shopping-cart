import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/kids">Kids</NavLink>
          </li>
        </ul>
      </nav>

      <Link to="/" className={styles.headLink}>
        <h1 className={styles.title}>ModishTee</h1>
      </Link>
      {/* <h1 className={styles.title}>ModishTee</h1> */}

      <nav
        className={`${styles.navInfo} ${styles.rightNav}  ${
          menuOpen ? styles.open : "null"
        }`}
      >
        <ul>
          <input type="text" placeholder="Search" />
          <Link>Shop</Link>
          <Link to="/cart">Cart</Link>
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
