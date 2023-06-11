import React from "react";

const MainPage = ({ isDarkMode }) => {

	return (
		<>
			<div className={`w-full relative h-screen ${
        isDarkMode
          ? "bg-gray-800 bg-opacity-60"
          : "bg-gray-800 bg-opacity-30"
      }`}>
				<div className="flex flex-col justify-center items-center p-4 mx-auto">
					<div className="fixed bottom-4 flex text-md">
						&copy; Copyright by QualiArts. Created by Dasewasia @2023
					</div>
				</div>
			</div>
		</>
	);
};

export default MainPage;
