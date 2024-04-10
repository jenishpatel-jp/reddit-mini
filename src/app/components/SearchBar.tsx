'use client';

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");


  return (
    <div className="relative flex flex-1 flex-shrink-0 shadow-lg">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="w-full m-5 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        //function to capture when the user presses enter 
        onKeyDownCapture={event => {
          if (event.key == "Enter"){
            console.log("Pressed enter")
          }
        }}

        //
        onChange={event => setSearchInput(event.target.value)}
      />
      <button onClick={()=> console.log("Clicked button")}>
      <MagnifyingGlassIcon className="absolute right-8 top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </button>
    </div>
  );
}
