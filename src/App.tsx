import "./App.css";
import { useState } from "react";
import Navbar from "./scenes/Navbar";
import Header from "./scenes/Header";
import Companies from "./scenes/Companies";
import GPT3 from "./scenes/GPT3";
import Features from "./scenes/Features";

function App() {
	return (
		<div className="App">
			<div className="gradient-bg">
				<Navbar />
        <Header />
        <Companies />
        <GPT3 />
        <Features />
			</div>
		</div>
	);
}

export default App;
