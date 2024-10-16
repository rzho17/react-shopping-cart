import { useState } from "react";
// import styles from "./SearchResults.module.css";
import styles from "../Navbar.module.css";
import { Link } from "react-router-dom";

export default function SearchBarResults({
  searchResults,
  setMenuOpen,
  setInput,
  setSearchResults,
}) {
  const clearSearch = () => {
    setMenuOpen();
    setInput("");
    setSearchResults([]);
  };
  return (
    <>
      {searchResults.length >= 1 ? (
        <div className={styles.listResults}>
          {searchResults.map((item) => {
            return (
              <div
                className={styles.searchItem}
                key={item["web-scraper-order"]}
              >
                <img src={item.mainImg} alt="" />
                <Link
                  to="product"
                  onClick={clearSearch}
                  state={{ item }}
                  className={styles.linkClick}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
    // <div className="">

    // creates a div with all the results from the filtered search bar
    // creates links and visuals to each product filtered
  );
}
