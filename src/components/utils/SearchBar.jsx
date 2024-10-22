import { useEffect, useState } from "react";
import styles from "../Navbar.module.css";

export const SearchBar = ({ setSearchResults, input, setInput }) => {
  // fetches all shopping data
  const fetchData = async (value) => {
    const data = await fetch("/data/twelfths_data.json");

    const allData = await data.json();

    const results = allData.filter((item) => {
      return (
        // checks if the item and value exists
        // return items that matches value user inputs
        value && item && item.name && item.name.toLowerCase().includes(value)
      );
    });
    setSearchResults(results);
  };

  //   handles fetching the data when user has a changed input
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
