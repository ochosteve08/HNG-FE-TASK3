/* eslint-disable react/prop-types */
import { useState } from "react";

const  ImageSearch =({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by tag..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
}

export default ImageSearch;
