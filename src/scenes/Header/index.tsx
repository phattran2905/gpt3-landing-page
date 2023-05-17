import "./index.css";
import AIIllustration from "@assets/ai.png";
import PeopleAvatars from "@assets/people-avatars.png";
import { useState } from "react";
import { SelectedPage } from "../../shared/types";

type Props = {};
function Header({}: Props) {
	const [email, setEmail] = useState<string>();

	const onSubmit = (e: any) => {
		const mailFormat =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (email && !email.toLowerCase().match(mailFormat)) {
			e.preventDefault();
		}
	};

	return (
		<section
			className="section-padding header"
			id={SelectedPage.Home}
		>
			{/* Content */}
			<div className="header__content">
				<h1 className="gradient-text header__heading">
					Let's Build Something amazing with GPT-3 OpenAI
				</h1>
				<p className="header__text">
					Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
					blessing. Indulgence way everything joy alteration boisterous the attachment. Party we
					years to order allow asked of.
				</p>

				<div className="header__form">
					<form
						target="_blank"
						onSubmit={onSubmit}
						action="https://formsubmit.io/send/614d956a-220b-48bd-9620-b7bdb6fe8aaf"
						method="POST"
					>
						<input
							type="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.currentTarget.value)}
							placeholder="Your Email Address"
						/>
						<button
							type="submit"
							className=""
						>
							Get Started
						</button>
					</form>
				</div>

				<div className="header__members">
					<img
						className="header__people-avatars"
						src={PeopleAvatars}
						alt="people avatars"
					/>
					<span className="header__joined-members">
						1,600 people requested access a visit in last 24 hours
					</span>
				</div>
			</div>

			{/* Illustration */}
			<div className="header__illustration">
				<img
					src={AIIllustration}
					alt="AI Illustration"
				/>
			</div>
		</section>
	);
}
export default Header;
