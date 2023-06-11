import React from "react";

const MainPage = ({ isDarkMode }) => {
  return (
    <>
      <div
        className={`relative h-screen w-full ${
          isDarkMode ? "bg-gray-800 bg-opacity-60" : "bg-gray-800 bg-opacity-30"
        }`}
      ></div>
    </>
  );
};

export default MainPage;
