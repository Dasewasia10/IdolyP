import React, { useState } from "react";

const Card = ({ data, endpoint }) => {
	// const untuk kartu interaktif

	const [isHovered, setIsHovered] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	// Cek jenis endpoint
	if (endpoint === "idol") {
		const { name, image } = data;
		const icon = image[0].icon;

		return (
			<div
				className={`bg-gray-200 p-4 rounded-md shadow-md w-auto ${
					isClicked ? "bg-blue-200" : ""
				} ${
					isHovered ? "bg-gray-700 text-gray-200" : ""
				}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleClick}>
				<div className="card gap-4">
					<img src={icon} alt="Group Icon" />
					<h2 className="text-xl font-semibold">{name}</h2>
				</div>
			</div>
		);
	}

	if (endpoint === "card") {
		const { name, type, ability, quote } = data;

		return (
			<div className="card">
				<h2>{name}</h2>
				<p>Type: {type}</p>
				<p>Ability: {ability}</p>
				<p>Quote: {quote}</p>
			</div>
		);
	}

	return null; // Endpoint tidak dikenali, tidak menampilkan apa-apa
};

export default Card;
