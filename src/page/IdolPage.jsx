import React from "react";
import ShowData from "../components/ShowData";

const IdolPage = () => {
	return (
		<div className="idol-page mx-auto justify-center w-full">
			<ShowData endpoint="idol" />
		</div>
	);
};

export default IdolPage;
