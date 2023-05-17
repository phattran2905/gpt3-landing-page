import "./index.css";
import Article from "../../components/Article";
import article1ImgSrc from "@assets/article-1.png";
import article2ImgSrc from "@assets/article-2.png";
import article3ImgSrc from "@assets/article-3.png";
import article4ImgSrc from "@assets/article-4.png";
import article5ImgSrc from "@assets/article-5.png";
import { SelectedPage } from "../../shared/types";

type Props = {};

function Blogs({}: Props) {
	return (
		<section
			className="section-padding blogs"
			id={SelectedPage.Blogs}
		>
			<div className="blogs__content">
				<div className="blogs__title">
					<h2 className="gradient-text">A lot is happening, We are blogging about it.</h2>
				</div>

				<div className="blogs__articles">
					<div className="blogs__article blogs__article--stretch">
						<Article
							title="GPT-3 and Open  AI is the future. Let us explore how it is?"
							postedDate="Sep 26, 2021"
							imgSrc={article1ImgSrc}
						/>
					</div>

					<div className="blogs__article">
						<Article
							title="GPT-3 and Open  AI is the future. Let us explore how it is?"
							postedDate="Sep 26, 2021"
							imgSrc={article2ImgSrc}
						/>
					</div>
					<div className="blogs__article">
						<Article
							title="GPT-3 and Open  AI is the future. Let us explore how it is?"
							postedDate="Sep 26, 2021"
							imgSrc={article3ImgSrc}
						/>
					</div>
					<div className="blogs__article">
						<Article
							title="GPT-3 and Open  AI is the future. Let us explore how it is?"
							postedDate="Sep 26, 2021"
							imgSrc={article4ImgSrc}
						/>
					</div>
					<div className="blogs__article">
						<Article
							title="GPT-3 and Open  AI is the future. Let us explore how it is?"
							postedDate="Sep 26, 2021"
							imgSrc={article5ImgSrc}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Blogs;
