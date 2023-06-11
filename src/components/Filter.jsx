import React, { useState, useRef, useEffect } from "react";

const Filter = ({ onFilter, isDarkMode, groupOptions, almaMaterOptions }) => {
  const [filterTerm, setFilterTerm] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const filterRef = useRef(null);

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
    onFilter(event.target.value);
  };

  const handleFilterClick = () => {
    setShowOptions(!showOptions);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center">
        <button
          onClick={handleFilterClick}
          className={`text-md w-auto rounded-full border-2 border-blue-600 bg-gray-200 px-4 py-2 font-semibold text-blue-600 shadow-md hover:border-gray-200 hover:bg-blue-600 hover:text-gray-200 ${
            showOptions ? "text-blue-700" : ""
          }`}
        >
          Filter by
        </button>
        {showOptions && (
          <>
            <div
              ref={filterRef}
              className="absolute z-10 max-w-lg -translate-x-5 translate-y-3/4 rounded-md bg-white bg-opacity-80 p-4 text-gray-800"
            >
              <div className="mt-2 flex items-center">
                <label htmlFor="group" className="mr-2">
                  Group:
                </label>
                <select
                  id="group"
                  className={`border border-gray-300 p-1 w-20 ${
                    isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white"
                  }`}
                  value={filterTerm}
                  onChange={handleFilterChange}
                >
                  <option value="">All</option>
                  {groupOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-2 flex items-center">
                <label htmlFor="almaMater" className="mr-2">
                  Alma Mater:
                </label>
                <select
                  id="almaMater"
                  className={`border border-gray-300 p-1 w-20 ${
                    isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white"
                  }`}
                  value={filterTerm}
                  onChange={handleFilterChange}
                >
                  <option value="">
                    All
                  </option>
                  {almaMaterOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
