import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data, endpoint }) => {
	// Handler item when clicked
	const navigate = useNavigate();

	// Fungsi untuk menavigasi ke halaman detail
	const navigateToDetail = (id) => {
		navigate(`/${endpoint}/${id}`);
	};

	// Cek jenis endpoint
	if (endpoint === "idol") {
		const { name, image } = data;
		const icon = image[0].icon;

		return (
			<div className="p-4 rounded-full shadow-md w-auto bg-gray-200 hover:bg-gray-700 bg-opacity-80 text-gray-700 hover:text-gray-200 border-4 border-gray-700 hover:border-gray-200">
				<div
					className="card space-y-4"
					onClick={() => navigateToDetail(data.id)}>
					<img src={icon} alt="Group Icon" />
					<h2 className="text-xl font-semibold">{name}</h2>
				</div>
			</div>
		);
	}

	if (endpoint === "card") {
		const { name, type, ability, quote } = data;

		return (
			<div className="card" onClick={() => navigateToDetail(data.id)}>
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
