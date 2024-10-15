import { useEffect, useState } from "react";

export const SearchBar = ({ setSearchResults, input, setInput }) => {
  //   const [input, setInput] = useState("");

  const fetchData = async (value) => {
    const data = await fetch("/data/all_data.json");

    const allData = await data.json();

    const results = allData.filter((item) => {
      return (
        value && item && item.name && item.name.toLowerCase().includes(value)
      );
    });
    setSearchResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
