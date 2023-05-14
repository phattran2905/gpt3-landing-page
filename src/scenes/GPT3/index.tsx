import Feature from "../Feature";
import "./index.css";

type Props = {};
function GPT3({}: Props) {
	return (
		<section className="section-padding gpt3">
			<div className="gpt3__container">
				<div className="gpt3__definition">
					<Feature
						title="What is GPT-3"
						text="We so opinion friends me message as delight. Whole front do of plate heard oh ought.
          His defective nor convinced residence own. Connection has put impossible own
          apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly
          bachelor entrance to on by."
					/>
				</div>

				<div className="gpt3__heading">
					<h2 className="gradient-text">The possibilities are beyond your imagination</h2>

					<a
						href="#"
						className="gpt3__heading--cta"
					>
						Explore The Library
					</a>
				</div>

				<div className="gpt3__libraries">
					<div className="gpt3__libraries--col">
						<Feature
							title="Chatbots"
							text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
						/>
					</div>

					<div className="gpt3__libraries--col">
						<Feature
							title="Knowledgebase"
							text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
						/>
					</div>

					<div className="gpt3__libraries--col">
						<Feature
							title="Education"
							text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
export default GPT3;
