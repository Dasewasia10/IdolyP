import React, { useState } from "react";

const Search = ({ onSearch, isDarkMode }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(searchTerm);
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center space-x-2">
			<input
				type="text"
				placeholder="Search..."
				value={searchTerm}
				onChange={handleChange}
				className={`p-2 rounded-md bg-opacity-70 hover:bg-opacity-100 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
					isDarkMode
						? "border-gray-700 bg-gray-800 text-gray-200"
						: "border-gray-300 bg-white text-gray-700"
				}`}
			/>
			<button
				type="submit"
				className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
				Search
			</button>
		</form>
	);
};

export default Search;
