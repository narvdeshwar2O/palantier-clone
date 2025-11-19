import React from "react";
import Navbar from "../../Layout/Navbar";
import FormFields from "../FormFields";


function Search() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="w-[98%] flex flex-col gap-3">
        <FormFields
          type="text"
          className="text-white! border! p-3 focus:border-gray-700 transition-all duration-700"
          placeholder="Start typing for search"
        />
        <p className="text-white px-5 text-[10px]">Popular Searches</p>
      </div>
    </div>
  );
}

export default Search;
