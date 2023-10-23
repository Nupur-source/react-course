import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SortSelect from './SortSelect';
import FilterByDate from './FilterByDate';
import Course from './Course';
import SideMenu from './SideMenu';


function CourseList() {
  return (
    <div class="flex flex-no-wrap">
    <SideMenu />
    <div className="w-full md:pl-16">
      <div className="py-10 w-full px-6">
        <Header />
        <div className="flex flex-col lg:flex-row w-full lg:items-center lg:w-2/3">
          <SearchBar />
          <SortSelect />
          <FilterByDate />
        </div>
        <h3 className="font-medium text-gray-900 mt-8 mb-6">Investment Banking</h3>
        <div className="md:flex items-center mt-6 flex-wrap">
          <Course />
          {/* Add more Course components as needed */}
          <Course />
        </div>
      </div>
    </div>
</div>
  );
}

export default CourseList;