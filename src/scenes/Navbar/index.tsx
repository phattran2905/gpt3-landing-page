import "./index.css";
import { useState } from "react";
import Logo from "@assets/GPT-3.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type Props = {};

function Navbar({}: Props) {
	const [isToggledMenu, setIsToggledMenu] = useState(false);

	return (
		<nav className="">
			<div className="navbar">
				<a
					href="#home"
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
							<a href="#gpt3">What is GPT?</a>
						</li>
						<li className="navbar__link">
							<a href="#features">Case Studies</a>
						</li>
						<li className="navbar__link">
							<a href="#possibilities">Library</a>
						</li>
						<li className="navbar__link">
							<a href="#blogs">Blogs</a>
						</li>
					</ul>

					<div className="navbar_buttons">
						<button className="navbar__button">Sign In</button>
						<button className="navbar__button navbar__button--cta">Sign Up</button>
					</div>
				</div>

				<div className="navbar__menu">
					{!isToggledMenu && (
						<a
							className="navbar__icon--wrapper"
							onClick={() => setIsToggledMenu(true)}
						>
							<Bars3Icon className="navbar__icon" />
						</a>
					)}

					{isToggledMenu && (
						<div className="navbar__menu--toggled">
							<a
								className="navbar__icon--wrapper"
								onClick={() => setIsToggledMenu(false)}
							>
								<XMarkIcon className="navbar__icon" />
							</a>

							<div className="navbar__nav navbar__items--toggled">
								<ul className="navbar__items">
									<li className="navbar__link">
										<a href="#home">Home</a>
									</li>
									<li className="navbar__link">
										<a href="#gpt3">What is GPT?</a>
									</li>
									<li className="navbar__link">
										<a href="#features">Case Studies</a>
									</li>
									<li className="navbar__link">
										<a href="#possibilities">Library</a>
									</li>
									<li className="navbar__link">
										<a href="#blogs">Blogs</a>
									</li>
								</ul>

								<div className="navbar_buttons">
									<button className="navbar__button">Sign In</button>
									<button className="navbar__button navbar__button--cta">Sign Up</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
