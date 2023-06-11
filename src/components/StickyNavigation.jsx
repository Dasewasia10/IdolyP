import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StickyNavigation = ({ isDarkMode }) => {
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
				isSticky ? "fixed top-10 left-4" : "absolute"
			} h-fit rounded-md bg-gray-200 bg-opacity-60 hover:bg-opacity-100 p-4 transition-all duration-300 ease-in-out z-20 ${
				isDarkMode ? "bg-gray-700" : ""
			}`}>
			<ul className="flex flex-col space-y-8 items-start my-4">
				<li>
					<Link
						to="/idol"
						className={`${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
						Idol
					</Link>
				</li>
				<li>
					<Link
						to="/card"
						className={`${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
						Card
					</Link>
				</li>
				<li>
					<Link
						to="/about"
						className={`${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
						About Us
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default StickyNavigation;
