import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ToggleDarkMode from "./ToggleDarkMode";

const StickyNavigation = ({ isDarkMode, toggleDarkMode }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky ? "fixed left-4 top-10" : "absolute"
      } z-20 h-fit rounded-md bg-gray-200 bg-opacity-60 p-4 transition-all duration-300 ease-in-out hover:bg-opacity-100 ${
        isDarkMode ? "bg-gray-700" : ""
      }`}
    >
      <ul className="my-4 flex flex-col items-start space-y-8">
        <li>
          <Link
            to="/idol"
            className={`${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
          >
            Idol
          </Link>
        </li>
        <li>
          <Link
            to="/card"
            className={`${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
          >
            Card
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
          >
            About Us
          </Link>
        </li>
        <ToggleDarkMode
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </ul>
    </nav>
  );
};

export default StickyNavigation;
