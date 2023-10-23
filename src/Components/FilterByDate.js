import React from 'react';

function FilterByDate() {
  return (
    <div className="relative w-full lg:w-1/5 mb-4 lg:mb-0 lg:mr-3 z-10">
      <div className="z-0 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
        {/* Chevron down icon here */}
      </div>
      <select
        aria-label="Selected tab"
        className="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent"
      >
        <option className="text-sm text-gray-600">Name</option>
        <option className="text-sm text-gray-600">Size</option>
        <option selected className="text-sm text-gray-600">
          Duration
        </option>
      </select>
    </div>
  );
}

export default FilterByDate;