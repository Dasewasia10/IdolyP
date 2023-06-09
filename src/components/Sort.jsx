import React, { useState } from "react";

const Sort = ({ options, onSort }) => {
	const [selectedOption, setSelectedOption] = useState("");

	const handleChange = (e) => {
		setSelectedOption(e.target.value);
		onSort(e.target.value);
	};

	return (
		<select
			value={selectedOption}
			onChange={handleChange}
			className="p-2 font-semibold text-md rounded-full shadow-md w-auto bg-gray-200 hover:bg-blue-600 text-blue-600 hover:text-gray-200 border-2 border-blue-600 hover:border-gray-200">
			<option value="">Sort By</option>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default Sort;
