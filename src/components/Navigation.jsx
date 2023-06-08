// Navigation.jsx
import React from "react";
import { slide as Menu } from "react-burger-menu";

const Navigation = () => {
	return (
		<>
			<Menu>
				<a className="menu-item" href="/">
					Menu 1
				</a>
				<a className="menu-item" href="/">
					Menu 2
				</a>
				<a className="menu-item" href="/">
					Menu 3
				</a>
			</Menu>
		</>
	);
};

export default Navigation;
