import "./App.css";
import { useState } from "react";
import Navbar from "./scenes/Navbar";
import Header from "./scenes/Header";
import Companies from "./scenes/Companies";

function App() {
	return (
		<div className="App">
			<div className="gradient-bg">
				<Navbar />
        <Header />
        <Companies />
			</div>
		</div>
	);
}

export default App;
