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

	const uppercaseEndpoint = endpoint.toUpperCase();

	return (
		<div className="mt-4">
			<h1 className="font-bold text-2xl">{uppercaseEndpoint}</h1>

			<p>Total Data: {data.length}</p>
			<div className="flex flex-wrap justify-center gap-8 m-10">
				{visibleData.map((item) => (
					<Card key={item._id || item.id} data={item} endpoint={endpoint} />
				))}
			</div>

			{showMore && (
				<button
					className="font-bold text-2xl mb-10 p-4 rounded-xl shadow-md w-auto bg-gray-200 hover:bg-blue-600 text-blue-600 hover:text-gray-200 border-4 border-blue-600 hover:border-gray-200"
					onClick={handleLoadMore}>
					Load More...
				</button>
			)}
		</div>
	);
};

export default ShowData;
