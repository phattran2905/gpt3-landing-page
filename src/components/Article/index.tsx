import "./index.css";

type Props = {
	title: string;
	imgSrc: string;
	postedDate: string;
};

function Article({ title, imgSrc, postedDate }: Props) {
	return (
		<article className="article">
			<div className="article__img">
				<img
					src={imgSrc}
					alt={title}
				/>
			</div>

			<div className="article__content">
				<div className="article__heading">
					<span className="article__posted-date">{postedDate}</span>

					<p className="article__title">{title}</p>
				</div>

				<div className="article__read-more">
					<a
						href="#"
						className=""
					>
						Read Full Article {">>"}
					</a>
				</div>
			</div>
		</article>
	);
}
export default Article;
