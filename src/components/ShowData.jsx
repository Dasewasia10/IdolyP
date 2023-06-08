import React, { useEffect, useState } from "react";
import Card from "./Card";

const ShowData = () => {
	const [data, setData] = useState([]);
	const [endpoint, setEndpoint] = useState("");
	const [visibleData, setVisibleData] = useState([]);
	const [showMore, setShowMore] = useState(true);

	useEffect(() => {
		const url = window.location.href;
		const path = url.split("/").pop();

		if (path === "card") {
			setEndpoint("card");
		} else if (path === "idol") {
			setEndpoint("idol");
		}
	}, []);

	useEffect(() => {
		if (endpoint) {
			// Panggil API sesuai endpoint yang diinginkan
			fetch(`https://idoly-pride-api.vercel.app/api/${endpoint}`)
				.then((response) => response.json())
				.then((data) => {
					setData(data);
					setVisibleData(data.slice(0, 8));
				})
				.catch((error) => console.log(error));
		}
	}, [endpoint]);

	const handleLoadMore = () => {
		const newData = data.slice(visibleData.length, visibleData.length + 8);
		setVisibleData((prevData) => [...prevData, ...newData]);

		if (visibleData.length + newData.length === data.length) {
			setShowMore(false);
		}
	};

	return (
		<div>
			<h1>Show Data</h1>
			<p>Endpoint: {endpoint}</p>

			<p>Total Data: {data.length}</p>
			<div className="flex flex-wrap justify-center gap-8 m-10">
				{visibleData.map((item) => (
					<Card key={item._id || item.id} data={item} endpoint={endpoint} />
				))}
			</div>

			{showMore && <button className="p-4 bg-blue-300 hover:bg-blue-800 hover:text-gray-50 text-xl rounded-lg mb-10" onClick={handleLoadMore}>Load More...</button>}
		</div>
	);
};

export default ShowData;
