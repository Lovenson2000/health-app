import React, { useState } from 'react';
import "./searchTyping.scss";

function SearchTyping({ onSearchQueryChange, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearchQueryChange(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  }

  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchTyping;
