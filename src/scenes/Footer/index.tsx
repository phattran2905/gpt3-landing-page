import "./index.css";
import Logo from "@assets/GPT-3.svg";

type Props = {};
function Footer({}: Props) {
	return (
		<footer className="footer">
			<div className="footer__cta">
				<h4 className="gradient-text footer__cta--title">Do you want to step into the future before others?</h4>
				<a href="#home" className="footer__cta--button">Request Early Access</a>
			</div>

			<div className="footer__nav">
				<div className="footer__brand">
					<img
						src={Logo}
						alt="logo"
					/>

					<p className="footer__brand--desc">
						Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
					</p>
				</div>

				<div className="footer__links">
					<p className="footer__title">Links</p>
					<ul className="footer__list">
						<li className="footer__item">
							<a href="#">Overons</a>
						</li>
						<li className="footer__item">
							<a href="#">Social Media</a>
						</li>
						<li className="footer__item">
							<a href="#">Counters</a>
						</li>
						<li className="footer__item">
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>

				<div className="footer__company">
					<p className="footer__title">Company</p>
					<ul className="footer__list">
						<li className="footer__item">
							<a href="#">Terms & Conditions</a>
						</li>
						<li className="footer__item">
							<a href="#">Privacy Policy</a>
						</li>
						<li className="footer__item">
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>

				<div className="footer__GIT">
					<p className="footer__title">Get in touch</p>
					<ul className="footer__list">
						<li className="footer__item">Crechterwoord K12 182 DK Alknjkcb</li>
						<li className="footer__item">085-132567</li>
						<li className="footer__item">info@payme.net</li>
					</ul>
				</div>
			</div>

			<div className="footer__copyright">
				<p>© 2023 GPT-3. All rights reserved.</p>
			</div>
		</footer>
	);
}
export default Footer;
