
import React, { useState } from 'react';

import './search.scss';
import SearchSelect from './SearchSelect';
import SearchTyping from './SearchTyping';

function Filter({ onSearch }) {
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const options = [
    { label: 'Name', value: 'name' },
    { label: 'Address', value: 'location' },
    { label: 'Specialty', value: 'specialty' },
    { label: 'Availability', value: 'availability' },
  ];

  const handleSearch = () => {
    onSearch(category, searchQuery);
  };

  return (
    <div className="search-container">
      <SearchSelect
        options={options}
        onCategoryChange={setCategory}
      />
      <SearchTyping
        onSearchQueryChange={setSearchQuery}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default Filter;
