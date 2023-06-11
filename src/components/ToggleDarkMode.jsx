import React, { useEffect } from "react";

const ToggleDarkMode = ({ isDarkMode, toggleDarkMode }) => {
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      className={`rounded-full p-2 shadow-md transition-colors duration-300 ${
        isDarkMode ? "bg-gray-200" : "bg-gray-800"
      }`}
      onClick={toggleDarkMode}
      title="Toggle Dark Mode"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-6 w-6 ${
          isDarkMode ? "text-gray-800" : "text-gray-200"
        } transition-colors duration-300`}
      >
        {isDarkMode ? (
          <path d="M21 12.79A9 9 0 0 1 12.07 21a9 9 0 0 1-9-9.94 8.998 8.998 0 0 1 4.1-7.54A4.996 4.996 0 0 0 11 5a5 5 0 0 0 0-10 1 1 0 0 1 0-2 7 7 0 1 1 6.33 10.29" />
        ) : (
          <path d="M12 22s-6.5-2-6.5-10a6.5 6.5 0 1 1 13 0c0 8-6.5 10-6.5 10zM12 11V2" />
        )}
      </svg>
    </button>
  );
};

export default ToggleDarkMode;
