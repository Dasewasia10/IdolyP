import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./page/MainPage";
import CardPage from "./page/CardPage";
import IdolPage from "./page/IdolPage";
import IdolPageDetail from "./page/IdolPageDetail";

import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
	// Mengambil status Dark Mode dari localStorage (jika ada)
	const savedDarkMode = localStorage.getItem("darkMode");
	const [isDarkMode, setIsDarkMode] = useState(savedDarkMode === "true");

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			// Menyimpan status Dark Mode ke localStorage
			localStorage.setItem("darkMode", newMode);
			return newMode;
		});
	};

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("isDarkMode", isDarkMode);
	}, [isDarkMode]);

	// handler tombol scroll to top
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	// Handler randomize background image
	const backgroundImages = [
		"https://github.com/Dasewasia10/IdolyPride-image-voice-collection/raw/main/image/idol/KR%20Keringat/KR_ID01.png",
		"https://github.com/Dasewasia10/IdolyPride-image-voice-collection/raw/main/image/idol/KR%20Keringat/KR_ID02.png",
		"https://github.com/Dasewasia10/IdolyPride-image-voice-collection/raw/main/image/idol/KR%20Keringat/KR_ID03.png",
		"https://github.com/Dasewasia10/IdolyPride-image-voice-collection/raw/main/image/idol/KR%20Keringat/KR_ID04.png",
		"https://github.com/Dasewasia10/IdolyPride-image-voice-collection/raw/main/image/idol/KR%20Keringat/KR_ID05.png",
		"https://github.com/Dasewasia10/IdolyPride-image-voice-collection/raw/main/image/idol/KR%20Keringat/KR_ID06.png",
		"https://github.com/Dasewasia10/IdolyPride-image-voice-collection/raw/main/image/idol/KR%20Keringat/KR_ID07.png",
		"https://github.com/Dasewasia10/IdolyPride-image-voice-collection/raw/main/image/idol/KR%20Keringat/KR_ID08.png",
		"https://github.com/Dasewasia10/IdolyPride-image-voice-collection/raw/main/image/idol/KR%20Keringat/KR_ID09.png",
		"https://github.com/Dasewasia10/IdolyPride-image-voice-collection/raw/main/image/idol/KR%20Keringat/KR_ID10.png",
	];

	const getRandomBackgroundImage = () => {
		const randomIndex = Math.floor(Math.random() * backgroundImages.length);
		return backgroundImages[randomIndex];
	};
	const [backgroundImage, setBackgroundImage] = useState("");

	useEffect(() => {
		const randomBackground = getRandomBackgroundImage();
		setBackgroundImage(randomBackground);
	}, []);

	return (
		<Router>
			<div
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
					position: "absolute",
					top: 0,
					zIndex: -20,
				}}
				className={`App w-full ${isDarkMode ? "dark" : ""}`}>
				<Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
				<div className="flex">
					<Routes>
						<Route path="/" element={<MainPage isDarkMode={isDarkMode} />} />
						<Route path="/card" element={<CardPage />} />
						<Route path="/idol" element={<IdolPage />} />
						<Route path="/idol/:id" element={<IdolPageDetail />} />
					</Routes>
				</div>
				<ScrollToTopButton isVisible={isVisible} scrollToTop={scrollToTop} />
			</div>
		</Router>
	);
}

export default App;
