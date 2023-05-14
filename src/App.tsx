import "./App.css";
import { useState } from "react";
import Navbar from "./scenes/Navbar";
import Header from "./scenes/Header";

function App() {
	return (
		<div className="App">
			<div className="gradient-bg">
				<Navbar />
        <Header />
			</div>
		</div>
	);
}

export default App;
