import React, { useState, useRef, useEffect } from "react";

const Filter = ({
  onFilter,
  isDarkMode,
  groupOptions,
  almaMaterOptions,
  apparentAgeOptions,
  typeOptions,
  abilityOptions,
  limitedOptions,
  nameOptions,
  initialOptions,
}) => {
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
              {/* Endpoint Idol */}
              {groupOptions && (
                <div className="mt-2 flex items-center">
                  <label htmlFor="group" className="mr-2">
                    Group:
                  </label>
                  <select
                    id="group"
                    className={`w-20 border border-gray-300 p-1 ${
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
              )}
              {apparentAgeOptions && (
                <div className="mt-2 flex items-center">
                  <label htmlFor="apparent_age" className="mr-2">
                    Apparent Age:
                  </label>
                  <select
                    id="apparent_age"
                    className={`w-20 border border-gray-300 p-1 ${
                      isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white"
                    }`}
                    value={filterTerm}
                    onChange={handleFilterChange}
                  >
                    <option value="">All</option>
                    {apparentAgeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {almaMaterOptions && (
                <div className="mt-2 flex items-center">
                  <label htmlFor="almaMater" className="mr-2">
                    Alma Mater:
                  </label>
                  <select
                    id="almaMater"
                    className={`w-20 border border-gray-300 p-1 ${
                      isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white"
                    }`}
                    value={filterTerm}
                    onChange={handleFilterChange}
                  >
                    <option value="">All</option>
                    {almaMaterOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Endpoint Card */}
              {nameOptions && (
                <div className="mt-2 flex items-center">
                  <label htmlFor="name" className="mr-2">
                    Name:
                  </label>
                  <select
                    id="name"
                    className={`w-20 border border-gray-300 p-1 ${
                      isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white"
                    }`}
                    value={filterTerm}
                    onChange={handleFilterChange}
                  >
                    <option value="">All</option>
                    {nameOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {abilityOptions && (
                <div className="mt-2 flex items-center">
                  <label htmlFor="ability" className="mr-2">
                    Ability:
                  </label>
                  <select
                    id="ability"
                    className={`w-20 border border-gray-300 p-1 ${
                      isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white"
                    }`}
                    value={filterTerm}
                    onChange={handleFilterChange}
                  >
                    <option value="">All</option>
                    {abilityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {typeOptions && (
                <div className="mt-2 flex items-center">
                  <label htmlFor="type" className="mr-2">
                    Type:
                  </label>
                  <select
                    id="type"
                    className={`w-20 border border-gray-300 p-1 ${
                      isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white"
                    }`}
                    value={filterTerm}
                    onChange={handleFilterChange}
                  >
                    <option value="">All</option>
                    {typeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {initialOptions && (
                <div className="mt-2 flex items-center">
                  <label htmlFor="initial" className="mr-2">
                    Initial:
                  </label>
                  <select
                    id="initial"
                    className={`w-20 border border-gray-300 p-1 ${
                      isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white"
                    }`}
                    value={filterTerm}
                    onChange={handleFilterChange}
                  >
                    <option value="">All</option>
                    {initialOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {limitedOptions && (
                <div className="mt-2 flex items-center">
                  <label htmlFor="limited" className="mr-2">
                    Limited:
                  </label>
                  <select
                    id="limited"
                    className={`w-20 border border-gray-300 p-1 ${
                      isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white"
                    }`}
                    value={filterTerm}
                    onChange={handleFilterChange}
                  >
                    <option value="">All</option>
                    {limitedOptions.map((option) => (
                      <option key={option.toString()} value={option.toString()}>
                        {option ? "Yes" : "No"}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
