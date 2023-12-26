import React, { useState, useEffect } from 'react';
import Empty from '../empty/Empty';

import './search.scss';
import SearchSelect from './SearchSelect';
import SearchTyping from './SearchTyping';

function Filter({ onSearch }) {
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  
  const options = [
    { label: 'Name', value: 'name' },
    { label: 'Address', value: 'location' },
    { label: 'Specialty', value: 'specialty' },
    { label: 'Availability', value: 'availability' },
  ];

  useEffect(() => {
    // Update the results whenever there is a search
    setResults(onSearch(category, searchQuery) || []);
  }, [category, searchQuery, onSearch]);

  return (
    <div className="search-container">
      <SearchSelect
        options={options}
        onCategoryChange={setCategory}
      />
      <SearchTyping
        onSearchQueryChange={setSearchQuery}
        onSearch={() => onSearch(category, searchQuery)}
      />

      {/* Render the search results */}
      {results.length > 0 && (
        <div className="results-container">
          {/* Render your results here */}
          {results.map((result, index) => (
            <div key={index}>{/* Render your result item here */}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;