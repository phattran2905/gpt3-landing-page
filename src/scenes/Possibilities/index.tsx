import { SelectedPage } from "../../shared/types";
import "./index.css";
import PossibilitiesImg from "@assets/possibilities.png";

type Props = {};
function Possibilities({}: Props) {
	return (
		<section className="section-padding possibilities" id={SelectedPage.Library}>
			<div className="possibilities__container">
				<div className="possibilities__img">
					<img
						src={PossibilitiesImg}
						alt="Possibilities Image"
					/>
				</div>

				<div className="possibilities__content">
					<p className="possibilities__prompt possibilities__prompt--1">Request Early Access to Get Started</p>
					<h2 className="gradient-text possibilities__title">The possibilities are beyond your imagination</h2>
					<p className="possibilities__desc">
						Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
						blessing. Indulgence way everything joy alteration boisterous the attachment. Party we
						years to order allow asked of.
					</p>
					<p className="possibilities__prompt possibilities__prompt--2">Request Early Access to Get Started</p>
				</div>
			</div>
		</section>
	);
}
export default Possibilities;
