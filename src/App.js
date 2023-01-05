/** @format */
import React, { useState, createContext } from "react";
import Home from "./Components/Home";
import ReactSwitch from "react-switch";
import "./Global/global.css";
export const ThemeContext = createContext(null);

function App() {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme(curr => (curr === "light" ? "dark" : "light"));
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div
				id={theme}
				className="switch"
			>
				<ReactSwitch
					className="float-right mt-5 mr-10 "
					onChange={toggleTheme}
					checked={theme === "dark"}
				/>
				<Home />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
