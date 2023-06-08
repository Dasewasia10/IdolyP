import React, { useState } from "react";

const Sort = ({ options, onSort }) => {
	const [selectedOption, setSelectedOption] = useState("");

	const handleChange = (e) => {
		setSelectedOption(e.target.value);
		onSort(e.target.value);
	};

	return (
		<select value={selectedOption} onChange={handleChange}>
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
