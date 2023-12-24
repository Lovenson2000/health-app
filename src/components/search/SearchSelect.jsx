import React, { useState } from 'react';
import "./searchSelect.scss";

function SearchSelect({ options, onCategoryChange }) {

  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    onCategoryChange(selectedCategory);
  }

  return (
    <div className="search-container">
      <form>
        <select
          value={category}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default SearchSelect;
