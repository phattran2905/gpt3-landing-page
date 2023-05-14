import "./index.css";
import AIIllustration from "@assets/ai.png";
import PeopleAvatars from "@assets/people-avatars.png";
import { useState } from "react";

type Props = {};
function Header({}: Props) {
	const [email, setEmail] = useState<string>();

	const onSubmit = (e: any) => {
    const newValue = e.currentTarget.value;
	};

	return (
		<section className="section-padding header">
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
						action=""
						method="GET"
						onSubmit={onSubmit}
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
