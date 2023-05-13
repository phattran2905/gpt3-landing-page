import "./index.css";
import Logo from "@assets/GPT-3.png";

type Props = {};

function Navbar({}: Props) {
	return (
		<nav>
			<div className="navbar">
				<a
					href="#"
					className="navbar__logo"
				>
					<img
						src={Logo}
						alt="Logo"
					/>
				</a>

				<div className="navbar__nav">
					<ul className="navbar__items">
						<li className="navbar__link">
							<a href="#home">Home</a>
						</li>
						<li className="navbar__link">
							<a href="#gpt">What is GPT?</a>
						</li>
						<li className="navbar__link">
							<a href="#openai">Open AI</a>
						</li>
						<li className="navbar__link">
							<a href="#case-studies">Case Studies</a>
						</li>
						<li className="navbar__link">
							<a href="#library">Library</a>
						</li>
					</ul>

					<div className="navbar_buttons">
						<button className="navbar__button">Sign In</button>
						<button className="navbar__button navbar__button--cta">Sign Up</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
