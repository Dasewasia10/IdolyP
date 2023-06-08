import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode";

const Header = ({ isDarkMode, toggleDarkMode }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-gray-200 p-4">
			<div className="flex justify-between items-center">
				<div className="flex h-8 md:h-12 lg:h-16 w-auto top-6 left-10 flex-row gap-10 items-center z-50">
					<a href="/">
						<img
							className="h-4 md:h-8 lg:h-12 w-auto"
							src={`/assets/pojok.png`}
							alt="idoly-pride-blue-logo"
						/>
					</a>
					<img
						className="h-8 md:h-12 lg:h-16 w-auto"
						src={`/assets/dase.png`}
						alt="dasesplace-logo"
					/>
				</div>
				<ToggleDarkMode
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
				/>

				<div className="lg:hidden">
					<button
						className="block text-gray-800 focus:outline-none"
						onClick={toggleMenu}
						aria-label="Toggle Menu">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
					<div
						className={`${
							isMenuOpen ? "block" : "hidden"
						} absolute right-0 w-48 py-2 mt-2 bg-white border border-gray-200 rounded shadow-lg`}>
						<Link
							to="/idol"
							className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
							Idol
						</Link>
						<Link
							to="/card"
							className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
							Card
						</Link>
						<Link
							to="/about"
							className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
							About Us
						</Link>
					</div>
				</div>
				<nav className="hidden lg:block">
					<ul className="flex space-x-4">
						<li>
							<Link to="/idol" className="text-gray-800">
								Idol
							</Link>
						</li>
						<li>
							<Link to="/card" className="text-gray-800">
								Card
							</Link>
						</li>
						<li>
							<Link to="/about" className="text-gray-800">
								About Us
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
