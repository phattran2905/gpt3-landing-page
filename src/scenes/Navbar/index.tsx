import "./index.css";
import { useState } from "react";
import Logo from "@assets/GPT-3.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SelectedPage } from "../../shared/types";
import Link from "../../components/Link";

type Props = {
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({ selectedPage, setSelectedPage }: Props) {
	const [isToggledMenu, setIsToggledMenu] = useState(false);

	return (
		<nav className="">
			<div className="navbar">
				<a
					href=""
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
							<Link
								page={"Home"}
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</li>
						<li className="navbar__link">
							<Link
								page={"What is GPT"}
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</li>
						<li className="navbar__link">
							<Link
								page={"Case Studies"}
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</li>
						<li className="navbar__link">
							<Link
								page={"Library"}
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</li>
						<li className="navbar__link">
							<Link
								page={"Blogs"}
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
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
										<Link
											page={"Home"}
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									</li>
									<li className="navbar__link">
										<Link
											page={"What is GPT"}
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									</li>
									<li className="navbar__link">
										<Link
											page={"Case Studies"}
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									</li>
									<li className="navbar__link">
										<Link
											page={"Library"}
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									</li>
									<li className="navbar__link">
										<Link
											page={"Blogs"}
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									</li>
									<li className="navbar__link">
										<a className="navbar__link">Sign In</a>
									</li>
									<li className="navbar__link">
										<a className="navbar__link">Sign Up</a>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
