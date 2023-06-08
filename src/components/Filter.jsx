import React, { useState } from "react";

const Filter = ({ options, onFilter }) => {
	const [selectedOption, setSelectedOption] = useState("");

	const handleChange = (e) => {
		setSelectedOption(e.target.value);
		onFilter(e.target.value);
	};

	return (
		<select value={selectedOption} onChange={handleChange}>
			<option value="">All</option>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default Filter;
