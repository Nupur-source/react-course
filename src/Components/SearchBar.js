import React from 'react';

function SearchBar() {
  return (
    <div className="w-full relative mb-4 lg:mb-0 lg:mr-4 lg:w-1/3">
      <div className="absolute text-gray-600 flex items-center pl-3 h-full">
        {/* Search icon here */}
      </div>
      <label htmlFor="search" className="hidden"></label>
      <input
        id="search"
        className="bg-gray-100 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-10 text-sm border-gray-300 rounded border"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;