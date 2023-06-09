import React, { useState } from "react";

const Filter = ({ onFilter, isDarkMode, groupOptions, almaMaterOptions }) => {
	const [filterTerm, setFilterTerm] = useState("");
	const [showOptions, setShowOptions] = useState(false);

	const handleFilterChange = (event) => {
		setFilterTerm(event.target.value);
		onFilter(event.target.value);
	};

	const handleFilterClick = () => {
		setShowOptions(!showOptions);
	};

	return (
		<div>
			<div className="flex items-center">
				<button
					onClick={handleFilterClick}
					className={`px-4 py-2 font-semibold text-md rounded-full shadow-md w-auto bg-gray-200 hover:bg-blue-600 text-blue-600 hover:text-gray-200 border-2 border-blue-600 hover:border-gray-200 ${
						showOptions ? "text-blue-700" : ""
					}`}>
					Filter by
				</button>
				{showOptions && (
					<>
						<div className="fixed z-10 translate-y-3/4 -translate-x-1/2 bg-white bg-opacity-80 rounded-md p-4 text-gray-800">
							<div className="flex items-center mt-2">
								<label htmlFor="group" className="mr-2">
									Group:
								</label>
								<select
									id="group"
									className={`border border-gray-300 p-1 ${
										isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white"
									}`}
									value={filterTerm}
									onChange={handleFilterChange}>
									<option value="">All</option>
									{groupOptions.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
								</select>
							</div>

							<div className="flex items-center mt-2">
								<label htmlFor="almaMater" className="mr-2">
									Alma Mater:
								</label>
								<select
									id="almaMater"
									className={`border border-gray-300 p-1 ${
										isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white"
									}`}
									value={filterTerm}
									onChange={handleFilterChange}>
									<option value="">All</option>
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
