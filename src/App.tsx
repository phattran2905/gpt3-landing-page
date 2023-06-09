import "./App.css";
import Navbar from "./scenes/Navbar";
import Header from "./scenes/Header";
import Companies from "./scenes/Companies";
import GPT3 from "./scenes/GPT3";
import Features from "./scenes/Features";
import Possibilities from "./scenes/Possibilities";
import CTA from "./scenes/CTA";
import Blogs from "./scenes/Blogs";
import Footer from "./scenes/Footer";
import { SelectedPage } from "./shared/types";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

	return (
		<div className="App">
			<div className="gradient-bg">
				<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Header />
        <Companies />
        <GPT3 />
        <Features />
        <Possibilities />
        <CTA />
        <Blogs />
        <Footer />
			</div>
		</div>
	);
}

export default App;
