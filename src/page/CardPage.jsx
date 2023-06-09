import React from "react";
import ShowData from "../components/ShowData";

const CardPage = () => {
	return (
		<div className="card-page mx-auto mt-4 justify-center w-full">
			<ShowData endpoint="card" />
		</div>
	);
};

export default CardPage;
