import styles from "../Navbar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
  );
}

SearchBarResults.propTypes = {
  searchResults: PropTypes.array,
  setMenuOpen: PropTypes.func.isRequired,
  setInput: PropTypes.func.isRequired,
  setSearchResults: PropTypes.func.isRequired,
};
