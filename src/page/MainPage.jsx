import React, { useEffect } from "react";

const MainPage = ({ isDarkMode }) => {
	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("isDarkMode", isDarkMode);
	}, [isDarkMode]);

	return (
		<>
			<div className="w-full">
				<div className="flex flex-col h-screen justify-center items-center p-4 mx-auto">
					<div className="flex absolute text-sm bottom-8">
						&copy; Copyright by QualiArts. Created by Dasewasia @2023
					</div>
				</div>
			</div>
		</>
	);
};

export default MainPage;
