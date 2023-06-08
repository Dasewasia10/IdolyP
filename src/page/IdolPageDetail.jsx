import React from "react";
import { Link, useParams } from "react-router-dom";

const IdolPageDetail = () => {
	const { id } = useParams();

	// Dapatkan data berdasarkan ID dari API menggunakan useEffect atau fetch API

	return (
		<div className="detail-page">
			<h1>Detail Page</h1>
			<p>ID: {id}</p>
			{/* Tampilkan rincian data sesuai ID */}
			<Link to="/idol">Back to Idol Page</Link>
		</div>
	);
};

export default IdolPageDetail;
