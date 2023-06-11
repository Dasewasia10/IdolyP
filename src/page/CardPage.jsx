import React from "react";
import ShowData from "../components/ShowData";

const CardPage = () => {
	return (
		<div className="card-page mx-auto justify-center w-full">
			<ShowData endpoint="card" />
		</div>
	);
};

export default CardPage;
