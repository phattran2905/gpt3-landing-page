import "./index.css";

type Props = {
	title: string;
	text: string;
};

function Feature({ title, text }: Props) {
	return (
		<>
			<div className="feature__title">
				<p>{title}</p>
			</div>
			<div className="feature__text">{text}</div>
		</>
	);
}
export default Feature;
