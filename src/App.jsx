import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import MainPage from "./page/MainPage";
import CardPage from "./page/CardPage";
import IdolPage from "./page/IdolPage";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	console.log(isDarkMode);

	return (
		<Router>
			<div className={`App ${isDarkMode ? "dark" : ""}`}>
				<Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
				<div className="flex">
					<Routes>
						<Route path="/" element={<MainPage isDarkMode={isDarkMode} />} />
						<Route path="/card" element={<CardPage />} />
						<Route path="/idol" element={<IdolPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
