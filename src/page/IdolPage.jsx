import React from "react";
import ShowData from "../components/ShowData";

const IdolPage = () => {
	return (
		<div className="idol-page mx-auto mt-4 justify-center w-full">
			<ShowData endpoint="idol" />
		</div>
	);
};

export default IdolPage;
